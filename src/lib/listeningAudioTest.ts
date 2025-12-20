import { fetchListeningAudio } from "./listeningAudio";

export interface PipelineTestResult {
  slug: string;
  success: boolean;
  firstCall: {
    cached: boolean;
    durationMs: number;
    url?: string;
    error?: string;
  };
  secondCall: {
    cached: boolean;
    durationMs: number;
    url?: string;
    error?: string;
  };
  cacheWorking: boolean;
}

/**
 * Tests the listening audio pipeline by calling the edge function twice
 * and verifying that the second call returns cached: true
 */
export async function testListeningAudioPipeline(slug: string): Promise<PipelineTestResult> {
  const result: PipelineTestResult = {
    slug,
    success: false,
    firstCall: { cached: false, durationMs: 0 },
    secondCall: { cached: false, durationMs: 0 },
    cacheWorking: false,
  };

  // First call - may or may not be cached depending on state
  const start1 = performance.now();
  try {
    const response1 = await fetchListeningAudio(slug);
    result.firstCall = {
      cached: response1.cached,
      durationMs: Math.round(performance.now() - start1),
      url: response1.url,
    };
  } catch (error) {
    result.firstCall = {
      cached: false,
      durationMs: Math.round(performance.now() - start1),
      error: error instanceof Error ? error.message : String(error),
    };
    return result;
  }

  // Brief delay to ensure caching completes
  await new Promise(resolve => setTimeout(resolve, 500));

  // Second call - should always be cached after first call
  const start2 = performance.now();
  try {
    const response2 = await fetchListeningAudio(slug);
    result.secondCall = {
      cached: response2.cached,
      durationMs: Math.round(performance.now() - start2),
      url: response2.url,
    };
  } catch (error) {
    result.secondCall = {
      cached: false,
      durationMs: Math.round(performance.now() - start2),
      error: error instanceof Error ? error.message : String(error),
    };
    return result;
  }

  // Verify cache is working: second call must be cached
  result.cacheWorking = result.secondCall.cached === true;
  result.success = !result.firstCall.error && !result.secondCall.error && result.cacheWorking;

  return result;
}

// Valid slugs matching the edge function
export const VALID_SLUGS = [
  "customer-service-call",
  "journalist-interview",
  "museum-reception",
] as const;

export type ValidSlug = typeof VALID_SLUGS[number];

/**
 * Runs pipeline test for all available slugs
 */
export async function testAllSlugs(): Promise<PipelineTestResult[]> {
  const results: PipelineTestResult[] = [];
  
  for (const slug of VALID_SLUGS) {
    const result = await testListeningAudioPipeline(slug);
    results.push(result);
  }

  return results;
}
