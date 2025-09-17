// @subframe/sync-disable
'use client';
/*
 * Documentation:
 * Button — https://app.subframe.com/f5eadd770bce/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Default Page Layout — https://app.subframe.com/f5eadd770bce/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Modern navbar — https://app.subframe.com/f5eadd770bce/library?component=Modern+navbar_cba8555a-1e5a-4a57-8c3d-6ad67c2ef976
 */

import {Link} from "react-router-dom"
import React, { useState } from 'react';
import { FeatherBell } from '@subframe/core';
import { FeatherSettings } from '@subframe/core';
import { FeatherMenu } from '@subframe/core';
import { FeatherX } from '@subframe/core';
import { FeatherClipboard } from '@subframe/core';
import { FeatherMail } from '@subframe/core';
import { Button } from '../components/Button';
import { ModernNavbar } from '../components/ModernNavbar';
import * as SubframeUtils from '../utils';

const DefaultPageLayoutRoot = React.forwardRef(function DefaultPageLayoutRoot(
  { children, className, ...otherProps },
  ref
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={SubframeUtils.twClassNames(
        'flex h-screen w-full flex-col items-center bg-white',
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full max-w-[1024px] flex-wrap items-center gap-2 rounded-md border border-solid border-neutral-border shadow-lg m-4 px-4 py-2">
        <div className="flex h-9 flex-col items-start justify-center gap-2 px-2 py-2">
          <img
            className="h-9 flex-none object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1757931375/uploads/11326/atljsxvavonvkzgwwtmx.svg"
          />
        </div>
        <span className="text-heading-2 font-heading-2 text-default-font">
          Civic Samadhan
        </span>
        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-wrap items-center">
          <ModernNavbar.NavItem>Report</ModernNavbar.NavItem>
          <ModernNavbar.NavItem>Contact</ModernNavbar.NavItem>
        </div>
        <Button variant="neutral-secondary" icon={<FeatherBell />}>
          Notifications
        </Button>
        <Button variant="neutral-secondary" icon={<FeatherSettings />}>
          Settings
        </Button>
        <div className="flex items-center gap-2 px-2">
          <Link to={"/login"}><Button variant="brand-secondary">Log in</Button></Link>
          <Link to={"/signup"}><Button>Sign up</Button></Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full border-b border-solid border-neutral-border shadow-sm bg-white">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              className="h-8 w-8 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1757931375/uploads/11326/atljsxvavonvkzgwwtmx.svg"
            />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Civic Samadhan
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="neutral-secondary"
              size="small"
              icon={<FeatherBell />}
              onClick={() => {}}
            />
            <Button
              variant="neutral-secondary"
              size="small"
              icon={isMobileMenuOpen ? <FeatherX /> : <FeatherMenu />}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-solid border-neutral-border bg-white shadow-lg">
            <div className={`flex flex-col p-4 transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}>
              {/* Menu Items with Icons */}
              <div className="flex flex-col gap-4">
                <button className={`flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-left transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                    <FeatherClipboard className="w-5 h-5 text-blue-600 flex justify-center items-center " />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Report
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Report an issue in your area
                    </span>
                  </div>
                </button>

                <button className={`flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-left transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isMobileMenuOpen ? '150ms' : '0ms' }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                    <FeatherMail className="w-5 h-5 text-green-600 flex justify-center items-center" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Contact
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Get in touch with us
                    </span>
                  </div>
                </button>

                <button className={`flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-left transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                    <FeatherSettings className="w-5 h-5 text-purple-600 flex justify-center items-center" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Settings
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Manage your preferences
                    </span>
                  </div>
                </button>
              </div>

              {/* Divider */}
              <div className={`w-full h-px bg-neutral-border my-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: isMobileMenuOpen ? '250ms' : '0ms' }}></div>

              {/* Auth Buttons */}
              <div className={`flex flex-col gap-3 transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}>
                <Link to={"/login"}>
                  <Button variant="brand-secondary" size="medium" className="w-full justify-center">
                    Log in
                  </Button>
                </Link>
                <Link to={"/signup"}>
                  <Button size="medium" className="w-full justify-center">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
