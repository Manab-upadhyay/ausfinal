function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-blue-900 text-white text-center py-4 my-2">
      <p>{currentYear} Assam University Alumni website.</p>
    </footer>
  );
}

export default Footer;
