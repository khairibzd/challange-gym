"use client"
import Image from "next/image";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export  function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
      <Navbar isBlurred= {true}  
            maxWidth="xl"
     isMenuOpen={isMenuOpen}
     onMenuOpenChange={setIsMenuOpen}
    //  style={{
    //   background: 'rgba(255, 255, 255, 0.15)',
    //   boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    //   backdropFilter: 'blur(5px)',
    //   WebkitBackdropFilter: 'blur(5px)',
    //   // borderRadius: '10px',
    //   // border: '1px solid rgba(255, 255, 255, 0.18)',
    //  }}
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
         width={90}
         height={30}
     src="/logo-gym-removebg-preview.png"
     
     alt={"test"}
      />
       <p className="font-bold text-inherit">CHALLENGE GYM</p>
       </NavbarBrand>
   </NavbarContent>
       <NavbarContent className="hidden sm:flex gap-10" justify="center">
       {siteConfig.navItems.map((item, index) => (

       <NavbarItem key={`${item}-${index}`}>
         <Link color="foreground" href={item.href} >
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
       {/* <NavbarItem>
       <ThemeSwitch />
        

       </NavbarItem> */}
 
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
