'use client';

import React from 'react';
import { Button } from './ui/components/Button';
import { IconButton } from './ui/components/IconButton';
import { LinkButton } from './ui/components/LinkButton';
import { OAuthSocialButton } from './ui/components/OAuthSocialButton';
import { Switch } from './ui/components/Switch';
import { TextField } from './ui/components/TextField';
import {
  FeatherEye,
  FeatherEyeOff,
  FeatherLock,
  FeatherMail,
} from '@subframe/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="flex h-full w-full items-center justify-center bg-neutral-50 px-12 py-12">
        <div className="flex max-w-[448px] grow shrink-0 basis-0 flex-col items-center justify-center gap-6 rounded-md bg-default-background px-12 py-12 shadow-lg">
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-8 w-8 flex-none object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1757931375/uploads/11326/atljsxvavonvkzgwwtmx.svg"
              />
              <span className="text-heading-2 font-heading-2 text-default-font">
                Welcome back
              </span>
              <span className="text-body font-body text-subtext-color">
                Log in to manage and track local issues
              </span>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <TextField
                className="h-auto w-full flex-none"
                label="Email or phone"
                helpText=""
                icon={<FeatherMail />}
              >
                <TextField.Input
                  placeholder="Enter your email or phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
                label="Password"
                helpText=""
                icon={<FeatherLock />}
              >
                <div className="flex w-full grow shrink-0 basis-0 items-center gap-2 ">
                  <TextField.Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
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
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                  />
                  <span className="text-body font-body text-default-font">
                    Remember me
                  </span>
                </div>
                <LinkButton
                  variant="brand"
                  onClick={(event) => {}}
                >
                  Forgot password?
                </LinkButton>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <Button
                className="h-10 w-full flex-none"
                size="large"
                onClick={(event) => {}}
              >
                Log in
              </Button>
              <div className="flex w-full items-center gap-4">
                <div className="flex h-px grow shrink-0 basis-0 items-start bg-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">
                  or continue with
                </span>
                <div className="flex h-px grow shrink-0 basis-0 items-start bg-neutral-border" />
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <OAuthSocialButton
                  className="h-10 w-full flex-none"
                  logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
                  onClick={(event) => {}}
                >
                  Sign in with Google
                </OAuthSocialButton>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-body font-body text-subtext-color">
                New to Civic Samadhan?
              </span>
              <Link to="/signup">
              <LinkButton
                variant="brand"
                onClick={(event) => {}}
              >
                Sign up now
              </LinkButton></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
