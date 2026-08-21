/**
 * Consumer mediator (médiateur de la consommation).
 *
 * ─── WHY THIS EXISTS ──────────────────────────────────────────────────────────
 * Art. L.612-1 of the Code de la consommation requires any professional selling
 * to consumers to give them free access to a consumer mediator. Antony sells to
 * "Particuliers", so this applies. Art. R.616-1 then requires the mediator's
 * NAME, POSTAL ADDRESS and WEBSITE to appear on the site and in the CGV — a
 * promise to supply them "on request" does not satisfy it, and the DGCCRF can
 * fine up to €3,000 for a sole trader.
 *
 * It does NOT apply to formations sold to companies under convention. If Antony
 * ever stops taking individual clients, this whole file can go.
 *
 * ─── CURRENT STATE ────────────────────────────────────────────────────────────
 * MEDIATOR is null: no enrolment yet. While null, the CGV and mentions légales
 * simply omit the mediation paragraph. That is the honest state — better than
 * the previous wording, which promised details that did not exist.
 *
 * ─── HOW TO COMPLETE THIS ─────────────────────────────────────────────────────
 * 1. Enrol with a CECMC-referenced mediator. Only Antony can do this: it is a
 *    signed commercial contract with an annual or multi-year fee.
 * 2. When enrolling, declare the sector **"Formation pour adultes"** (and
 *    "Enseignement à distance" if the distanciel offer is to be covered too).
 *    A mediator only handles disputes in the sectors you registered for.
 * 3. Fill the three fields below from the convention they send back, set
 *    ENROLLED_ON, and redeploy. Both pages pick it up automatically.
 *
 * Shortlist, from the official CECMC directory (data.economie.gouv.fr,
 * "mediation-consommation-annuaire-des-mediateurs", checked 2026-08-18 —
 * these nine cover BOTH "Formation pour adultes" and "Enseignement à distance"):
 *
 *   CM2C              https://www.cm2c.net          — cheapest for a sole trader
 *   Médiation Solution https://sasmediationsolution-conso.fr
 *   MCP               http://www.mcpmediation.org
 *   Avenir Conso      https://www.avenir-conso.com
 *   SMP               https://www.mediateur-consommation-smp.fr
 *   Med Conso Dev     http://www.medconsodev.eu
 *   ANM Consommation  http://www.anmconso.com
 *   NotreAccord       https://www.mediation-consommation.notreaccord.com
 *   CMCO              https://www.cmco-mediation.fr
 *
 * Verify any quoted price on the mediator's own tarifs page before signing —
 * published figures move, and this comment will not.
 */

export interface Mediator {
  /** Exact legal name, as it appears on the convention. */
  name: string;
  /** Full postal address on one line. Required by art. R.616-1. */
  address: string;
  /** Website where a consumer files a case. Required by art. R.616-1. */
  url: string;
  /** Date the convention took effect, `YYYY-MM-DD`. For your own records. */
  enrolledOn: string;
}

/**
 * Set this once enrolled. Example of the shape expected:
 *
 *   export const MEDIATOR: Mediator | null = {
 *     name: "CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice",
 *     address: "14 rue Saint Jean, 75017 Paris",
 *     url: "https://www.cm2c.net",
 *     enrolledOn: "2026-09-01",
 *   };
 */
export const MEDIATOR: Mediator | null = null;
