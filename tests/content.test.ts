import { describe, expect, it } from "vitest";
import { aiSpines } from "#/content/ai";
import {
	about,
	azzasShots,
	azzasShotsCaption,
	badge,
	contact,
	nav,
	profile,
} from "#/content/profile";
import { projects } from "#/content/projects";
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
		badge,
		about,
		azzasShots,
		azzasShotsCaption,
			projects,
		skillGroups,
		timeline,
		aiSpines,
	]);

	it("não tem buraco de template nem marcador de rascunho", () => {
		for (const s of all) {
			// "todo" em minúscula é português ("nem todo site"); o marcador de rascunho é TODO em caixa alta.
			expect(s).not.toMatch(/\{\{|\}\}|lorem/i);
			expect(s).not.toMatch(/\bTODO\b/);
		}
	});

	it("não tem texto vazio", () => {
		for (const s of all) expect(s.trim()).not.toBe("");
	});

	it("usa o mesmo formato de período no currículo", () => {
		const ok =
			/^(jan a out\/\d{4} · \d+ meses|(\w{3}\/)?\d{4}( a \d{4}| até hoje)?|\w{3}\/\d{4} até hoje)$/;
		for (const ev of timeline) expect(ev.period, ev.id).toMatch(ok);
	});

	it("tem ids únicos", () => {
		for (const list of [timeline, projects, aiSpines]) {
			const ids = list.map((e) => e.id);
			expect(new Set(ids).size).toBe(ids.length);
		}
	});

	it("tem um painel para cada aba de IA", async () => {
		const { aiPanels } = await import("#/components/sections/ai/panels");
		for (const s of aiSpines)
			expect(aiPanels[s.id], s.id).toBeTypeOf("function");
	});

	it("todo item do currículo é de experiência ou de formação", () => {
		for (const ev of timeline) expect(["work", "study"], ev.id).toContain(ev.kind);
		expect(timeline.some((e) => e.kind === "work")).toBe(true);
		expect(timeline.some((e) => e.kind === "study")).toBe(true);
	});

	it("todo projeto tem imagem com dimensões e texto alternativo", () => {
		for (const p of projects) {
			expect(p.images.length, p.id).toBeGreaterThan(0);
			for (const img of p.images) {
				expect(img.width, img.src).toBeGreaterThan(0);
				expect(img.height, img.src).toBeGreaterThan(0);
				expect(img.alt.length, img.src).toBeGreaterThan(10);
				expect(img.src, img.src).toMatch(/^\/img\//);
			}
		}
	});

	it("os links de projeto são https", () => {
		for (const p of projects)
			if (p.link) expect(p.link.href, p.id).toMatch(/^https:\/\//);
	});

	it("mantém os fatos que não podem divergir", () => {
		const text = all.join(" ");
		expect(text).toContain("19/09/2026");
		expect(text).toMatch(/R\$\s?15 mil/);
	});
});
