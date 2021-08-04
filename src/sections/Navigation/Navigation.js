import React, {useState, useRef} from "react";
import {BurgerMenu, Ul} from "./Navigation.style";
import { useOnClickOutside } from '../../hooks';
import Link from 'next/link'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
    return (
    <nav ref={node}>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <Ul open={open}>
        <li><Link href="/" onClick={() => setOpen(!open)}>Home</Link></li>
        <li><a href="#services" onClick={() => setOpen(!open)}>Services</a></li>
        <li><a href="#experience" onClick={() => setOpen(!open)}>Experience</a></li>
        <li><a href="#locations" onClick={() => setOpen(!open)}>Work Locations</a></li>
        <li><a href="#contact" onClick={() => setOpen(!open)}>Contact Us</a></li>
      </Ul>
    </nav>
  );
};

export default Navigation;