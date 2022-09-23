import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center absolute bottom-[0%] left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600">
      <p>For learning purposes</p>
      <p>Copyright &copy; {new Date().getFullYear()} Austin Maxheimer</p>
    </footer>
  );
}
