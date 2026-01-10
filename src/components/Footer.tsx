export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} <span className="gradient-text font-medium">Kalyan Kanti Halder</span>.
        </p>
      </div>
    </footer>
  );
}
