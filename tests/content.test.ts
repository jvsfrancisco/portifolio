import { describe, expect, it } from "vitest";
import { aiSpines } from "#/content/ai";
import { contact, nav, profile, summary } from "#/content/profile";
import { skillGroups } from "#/content/skills";
import { timeline } from "#/content/timeline";

/** Invariantes do conteúdo: pegam buraco de template esquecido, campo vazio e formato de data diferente. */
const everyString = (value: unknown, out: string[] = []): string[] => {
	if (typeof value === "string") out.push(value);
	else if (Array.isArray(value)) for (const v of value) everyString(v, out);
	else if (value && typeof value === "object")
		for (const v of Object.values(value)) everyString(v, out);
	return out;
};

describe("conteúdo", () => {
	const all = everyString([
		profile,
		nav,
		contact,
		summary,
		skillGroups,
		timeline,
		aiSpines,
	]);

	it("não tem buraco de template nem marcador de rascunho", () => {
		for (const s of all) {
			expect(s).not.toMatch(/\{\{|\}\}|lorem|TODO/i);
		}
	});

	it("não tem texto vazio", () => {
		for (const s of all) expect(s.trim()).not.toBe("");
	});

	it("usa o mesmo formato de período no trajeto", () => {
		const ok =
			/^(jan a out\/\d{4} · \d+ meses|(\w{3}\/)?\d{4}( a \d{4}| até hoje)?|\w{3}\/\d{4} até hoje)$/;
		for (const ev of timeline) expect(ev.period, ev.id).toMatch(ok);
	});

	it("tem ids únicos", () => {
		const ids = timeline.map((e) => e.id);
		expect(new Set(ids).size).toBe(ids.length);
		const spines = aiSpines.map((s) => s.id);
		expect(new Set(spines).size).toBe(spines.length);
	});

	it("tem um painel para cada aba de IA", async () => {
		const { aiPanels } = await import("#/components/sections/ai/panels");
		for (const s of aiSpines)
			expect(aiPanels[s.id], s.id).toBeTypeOf("function");
	});

	it("a barra do trajeto cabe na grade", () => {
		for (const ev of timeline) {
			expect(ev.bar.fim, ev.id).toBeLessThanOrEqual(ev.bar.n);
			expect(ev.bar.ini, ev.id).toBeLessThanOrEqual(ev.bar.fim);
		}
	});
});
