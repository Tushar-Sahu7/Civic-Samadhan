"use client";
/*
 * Documentation:
 * Dialog — https://app.subframe.com/f5eadd770bce/library?component=Dialog_ca59db17-43fb-4247-8094-3c55162e902d
 * Dialog Layout — https://app.subframe.com/f5eadd770bce/library?component=Dialog+Layout_ff4920a8-df26-4012-934d-0a9edbf5e373
 */

import React from "react";
import { Dialog } from "../components/Dialog";
import * as SubframeUtils from "../utils";



const DialogLayoutRoot = React.forwardRef(function DialogLayoutRoot(
  { children, className, ...otherProps },
  ref
) {
  return (
    <Dialog className={className} ref={ref} {...otherProps}>
      <Dialog.Content>
        {children ? (
          <div className="flex w-full grow shrink-0 basis-0 items-start gap-6">
            {children}
          </div>
        ) : null}
      </Dialog.Content>
    </Dialog>
  );
});

export const DialogLayout = DialogLayoutRoot;
