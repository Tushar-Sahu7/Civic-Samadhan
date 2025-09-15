'use client';

import React from 'react';
import { Button } from './ui/components/Button';
import { TextField } from './ui/components/TextField';
import { DialogLayout } from './ui/layouts/DialogLayout';
import { FeatherFileText } from '@subframe/core';
import { FeatherMap } from '@subframe/core';
import { FeatherMapPin } from '@subframe/core';
import { FeatherMic } from '@subframe/core';
import { FeatherSend } from '@subframe/core';
import { FeatherTag } from '@subframe/core';
import { FeatherUploadCloud } from '@subframe/core';

function ReportAnIssue() {
  return (
    <DialogLayout open={false} onOpenChange={() => {}}>
      <div className="flex h-full w-full flex-col items-start gap-6 bg-default-background py-12">
        <div className="flex w-full max-w-[768px] flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-12 py-12 shadow-sm self-center">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Report a Civic Issue
            </span>
            <span className="text-body font-body text-subtext-color">
              Help us improve your community by reporting local issues.
              We&#39;ll make sure it gets to the right department.
            </span>
          </div>
          <TextField
            className="h-auto w-full flex-none"
            label="Issue Category"
            helpText="Select or type a category that best describes the issue"
            icon={<FeatherTag />}
          >
            <TextField.Input
              placeholder="Search or enter category"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Upload Photo
            </span>
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md border border-dashed border-brand-600 bg-brand-50 px-12 py-12">
              <FeatherUploadCloud className="text-heading-1 font-heading-1 text-brand-700" />
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-body font-body text-default-font text-center">
                  Click to select files or drag to upload
                </span>
                <span className="text-caption font-caption text-subtext-color text-center">
                  Supported: JPG, PNG (Max 5MB)
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Location
            </span>
            <Button
              icon={<FeatherMapPin />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Detect My Location
            </Button>
            <TextField
              className="h-auto w-full flex-none"
              label="Problem Address"
              helpText="Please provide the address if location detection fails"
              icon={<FeatherMap />}
            >
              <TextField.Input
                placeholder="Enter the street address"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
          <TextField
            className="h-auto w-full flex-none"
            label="Description"
            helpText="Provide details about the issue"
            icon={<FeatherFileText />}
            iconRight={<FeatherMic />}
          >
            <TextField.Input
              placeholder="Describe the problem..."
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Button
            className="h-10 w-full flex-none"
            size="large"
            icon={<FeatherSend />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Submit Report
          </Button>
        </div>
      </div>
    </DialogLayout>
  );
}

export default ReportAnIssue;
