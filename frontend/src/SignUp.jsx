'use client';

import React, { useState } from 'react';
import { Button } from './ui/components/Button';
import { Checkbox } from './ui/components/Checkbox';
import { IconButton } from './ui/components/IconButton';
import { LinkButton } from './ui/components/LinkButton';
import { OAuthSocialButton } from './ui/components/OAuthSocialButton';
import { TextField } from './ui/components/TextField';
import { FeatherEye, FeatherEyeOff } from '@subframe/core';
import { FeatherLock } from '@subframe/core';
import { FeatherMail } from '@subframe/core';
import { FeatherPhone } from '@subframe/core';
import { FeatherUser } from '@subframe/core';
import { Link } from "react-router-dom"

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [consent, setConsent] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-[548px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 rounded-md bg-default-background px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 shadow-lg">
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-8 w-8 flex-none object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1757931375/uploads/11326/atljsxvavonvkzgwwtmx.svg"
              />
              <span className="text-heading-2 font-heading-2 text-default-font">
                Create your account
              </span>
              <span className="text-body font-body text-subtext-color text-center">
                Join Civic Samadhan to help improve your community
              </span>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 sm:gap-6">
              <TextField
                className="h-auto w-full flex-none"
                label="Full Name"
                helpText=""
                icon={<FeatherUser />}
              >
                <TextField.Input
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
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
              <TextField
                className="h-auto w-full flex-none"
                label="Phone Number"
                helpText=""
                icon={<FeatherPhone />}
              >
                <TextField.Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </TextField>
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
                <div className="flex w-full grow shrink-0 basis-0 items-center gap-2">
                  <TextField.Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <IconButton
                    className="hover:bg-transparent active:bg-transparent"
                    size="small"
                    icon={showConfirmPassword ? <FeatherEye /> : <FeatherEyeOff />}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
              </TextField>
              <div className="flex w-full items-start">
                <Checkbox
                  label="I agree to the Terms and Conditions"
                  checked={consent}
                  onCheckedChange={setConsent}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <Button
                className="h-10 w-full flex-none"
                size="large"
                onClick={(event) => { }}
              >
                Create Account
              </Button>


            </div>
            <div className="flex items-center gap-2">
              <span className="text-body font-body text-subtext-color">
                Already have an account?
              </span>
              <Link to="/login">
                <LinkButton
                  variant="brand"
                  onClick={(event) => { }}
                >
                  Sign In
                </LinkButton></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
