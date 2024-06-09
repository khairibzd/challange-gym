"use client"
import Image from "next/image";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Roboto } from 'next/font/google'
import { useTogglerContext } from "./context/toggler";
 

export  function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {  setAboutSidebar } = useTogglerContext();



  return (
      <Navbar  
            maxWidth="xl"
     isMenuOpen={isMenuOpen}
     onMenuOpenChange={setIsMenuOpen}
     style={{
      background: 'rgba(255, 255, 255, 0.15)',
      color: "white",
      // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(5px)',
      // WebkitBackdropFilter: 'blur(5px)',
      // borderRadius: '10px',
      // border: '1px solid rgba(255, 255, 255, 0.18)',
     }}
   >
     <NavbarContent className="sm:hidden" justify="start">
       <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
       <NavbarBrand>
       <Image 
         width={90}
         height={90}
     src="/logo-gym-removebg-preview.png"
     alt={"test"}
      />
      
           {/* <p className="font-bold text-inherit">CHALLENGE GYM</p> */}
       </NavbarBrand>
       
     </NavbarContent>

     
      

     <NavbarContent className="hidden sm:flex gap-10" justify="start">
       <NavbarBrand>
       <Image 
         width={60}
         height={20}
         src="/logo-gym-removebg-preview.png"
     alt={"test"}
      />
     

       <p className="ml-4 font-bold text-inherit">CHALLENGE GYM</p>
       </NavbarBrand>
   </NavbarContent>
       <NavbarContent className="hidden sm:flex gap-10" justify="center">
       {siteConfig.navItems.map((item, index) => (

       <NavbarItem key={`${item}-${index}`}>
         <Link color="foreground" href={item.href}   >
           {item.label}
         </Link>
       </NavbarItem>
      
    ))}
     </NavbarContent>

     <NavbarContent justify="end">
       <NavbarItem className="hidden lg:flex">
         <Link href="#">Login</Link>
       </NavbarItem>
       <NavbarItem>
         <Button as={Link} color="warning" href="#" variant="flat">
           Sign Up
         </Button>
        

       </NavbarItem>
        <NavbarItem>
        <button
            onClick={() => setAboutSidebar(true)}
            className="text-2xl hover:text-[#FF0336] ease-in duration-200"
          >
            <i className="fa-regular fa-chart-bar"></i>
          </button>
       {/* <ThemeSwitch /> */}
        

       </NavbarItem> 
 
     </NavbarContent>

     <NavbarMenu>
       {siteConfig.navMenuItems.map((item, index) => (
         <NavbarMenuItem key={`${item}-${index}`}>
           <Link
             className="w-full"
             color={
               index === 2 ? "warning" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"
             }
             href={item.href}
           >
             {item.label}
           </Link>
         </NavbarMenuItem>
       ))}
     </NavbarMenu>
   </Navbar>
      
    
  );
}
