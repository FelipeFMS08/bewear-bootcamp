

const Footer = () => {
  return (
    <footer className="bg-accent w-full gap-1 p-8">
      <div className="container mx-auto text-center text-xs font-medium text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} BeWear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;