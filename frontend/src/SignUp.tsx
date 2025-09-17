'use client';

import React, { useState } from 'react';
import { Button } from './ui/components/Button';
import { Checkbox } from './ui/components/Checkbox';
import { IconButton } from './ui/components/IconButton';
import { LinkButton } from './ui/components/LinkButton';
import { TextField } from './ui/components/TextField';
import { FeatherEye, FeatherEyeOff } from '@subframe/core';
import { FeatherLock } from '@subframe/core';
import { FeatherMail } from '@subframe/core';
import { FeatherPhone } from '@subframe/core';
import { FeatherUser } from '@subframe/core';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [consent, setConsent] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-6 bg-default-background py-12">
        <div className="flex w-full max-w-[768px] flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-12 py-12 shadow-lg self-center">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Create your account
            </span>
            <span className="text-body font-body text-subtext-color">
              Join Civic Samadhan to help improve your community.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <TextField
              className="h-auto w-full flex-none"
              label="Full Name"
              helpText=""
              icon={<FeatherUser />}
            >
              <TextField.Input
                placeholder="Enter your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </TextField>
            <div className="flex w-full items-end justify-center gap-4">
              <TextField
                className="h-auto grow shrink-0 basis-0 self-stretch"
                label="Phone Number"
                helpText=""
                icon={<FeatherPhone />}
              >
                <TextField.Input
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </TextField>
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Verify Phone
                </span>
                <div className="flex w-full items-center gap-2">
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
              </div>
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Send OTP
              </Button>
            </div>
            <div className="flex w-full items-end justify-center gap-4">
              <TextField
                className="grow"
                label="Email"
                helpText=""
                icon={<FeatherMail />}
              >
                <TextField.Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </TextField>
              <div className="flex flex-col items-start gap-2">
                <span className="text-caption-bold font-caption-bold text-default-font">
                  Verify Email
                </span>
                <div className="flex w-full items-center gap-2">
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <TextField
                    className="h-auto w-12 flex-none"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="0"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
              </div>
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Send OTP
              </Button>
            </div>
            <TextField
              className="h-auto w-full flex-none"
              label="Password"
              helpText=""
              icon={<FeatherLock />}
            >
              <div className="flex w-full grow shrink-0 basis-0 items-center gap-2">
                <TextField.Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton
                  className="hover:bg-transparent active:bg-transparent"
                  size="small"
                  icon={showPassword ? <FeatherEye /> : <FeatherEyeOff />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              label="Confirm Password"
              helpText=""
              icon={<FeatherLock />}
            >
              <TextField.Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </TextField>
            <div className="flex w-full flex-col items-start gap-2">
              <Checkbox
                label="Remember me"
                checked={rememberMe}
                onCheckedChange={() => setRememberMe(!rememberMe)}
              />
              <Checkbox
                label="I agree to the Terms and Conditions"
                checked={consent}
                onCheckedChange={() => setConsent(!consent)}
              />
            </div>
            <Button
              className="h-10 w-full flex-none"
              size="large"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Create Account
            </Button>
            <div className="flex w-full items-center justify-center gap-2">
              <span className="text-body font-body text-subtext-color">
                Already have an account?
              </span>
              <LinkButton
                variant="brand"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Sign In
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
