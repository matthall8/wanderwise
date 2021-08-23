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
        <li><Link href="/" onClick={() => setOpen(!open)}><a>Home</a></Link></li>
        <li><Link href="/" onClick={() => setOpen(!open)}><a>Top Destinations</a></Link></li>
        <li><Link href="/" onClick={() => setOpen(!open)}><a>Contact Us</a></Link></li>
      </Ul>
    </nav>
  );
};

export default Navigation;