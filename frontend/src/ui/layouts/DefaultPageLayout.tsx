// @subframe/sync-disable
'use client';
/*
 * Documentation:
 * Button — https://app.subframe.com/f5eadd770bce/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Default Page Layout — https://app.subframe.com/f5eadd770bce/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Modern navbar — https://app.subframe.com/f5eadd770bce/library?component=Modern+navbar_cba8555a-1e5a-4a57-8c3d-6ad67c2ef976
 */

import {Link} from "react-router-dom"
import React from 'react';
import { FeatherBell } from '@subframe/core';
import { FeatherSettings } from '@subframe/core';
import { Button } from '../components/Button';
import { ModernNavbar } from '../components/ModernNavbar';
import * as SubframeUtils from '../utils';

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLDivElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        'flex h-screen w-full flex-col items-center bg-white',
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full max-w-[1024px] flex-wrap items-center gap-2 rounded-md border border-solid border-neutral-border shadow-lg m-4">
        <div className="flex h-9 flex-col items-start justify-center gap-2 px-4 py-4">
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
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
