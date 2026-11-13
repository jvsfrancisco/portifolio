import { useEffect, useRef, useState } from "react";
import { cvHref, nav, profile } from "#/content/profile";

/**
 * Cabeçalho: foto redonda + nome à esquerda. No computador os links ficam à vista; em tela estreita
 * viram um índice em papel que abre no botão Menu. Esc, clique fora ou clique num link fecham o índice.
 */
export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const box = useRef<HTMLDivElement>(null);
	const btn = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key !== "Escape") return;
			setOpen(false);
			btn.current?.focus();
		};
		const onDown = (e: PointerEvent) => {
			if (!box.current?.contains(e.target as Node)) setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("pointerdown", onDown);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("pointerdown", onDown);
		};
	}, [open]);

	return (
		<>
			<a href="#projetos" className="skip">
				Pular para os projetos
			</a>
			<header className="ed-header">
				<div className="ed-wrap ed-header-in">
					<a href="#topo" className="ed-logo">
						<img
							src={profile.photo.src}
							width={36}
							height={36}
							alt=""
							className="ed-avatar"
						/>
						{profile.navName}
					</a>

					<nav aria-label="Seções" className="ed-nav">
						{nav.map((item) => (
							<a key={item.href} href={item.href}>
								{item.label}
							</a>
						))}
						<a href={cvHref} download className="pill ed-nav-cv">
							CV em PDF
						</a>
					</nav>

					<div ref={box} className="ed-menu">
						<button
							ref={btn}
							type="button"
							className="ed-menu-btn"
							aria-expanded={open}
							aria-controls="menu"
							onClick={() => setOpen((v) => !v)}
						>
							<span className="ed-burger" aria-hidden="true">
								<i />
								<i />
							</span>
							{open ? "Fechar" : "Menu"}
						</button>
						<nav
							id="menu"
							aria-label="Seções, menu"
							className="sheet ed-menu-sheet"
							hidden={!open}
						>
							<span className="rot ed-menu-tag">ir para</span>
							{nav.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={() => setOpen(false)}
								>
									{item.label}
									<span aria-hidden="true">→</span>
								</a>
							))}
							<a
								href={cvHref}
								download
								className="pill cv ed-menu-cv"
								onClick={() => setOpen(false)}
							>
								CV em PDF
							</a>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}
