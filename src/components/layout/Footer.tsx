const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-6 text-sm text-muted">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <span>© 2026 debugged. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
