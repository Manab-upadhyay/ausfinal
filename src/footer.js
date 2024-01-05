
const currentYear = new Date().getFullYear();
function Footer() {
   // Get the current year

  return (
    <footer className=" bg-blue-900 text-white text-center py-4 my-2">
      <p>&copy; {currentYear} Assam university Alumini Website.</p>
    </footer>
  );
}

export default Footer;
