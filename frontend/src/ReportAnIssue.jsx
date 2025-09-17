'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/components/Button';
import { TextField } from './ui/components/TextField';
import { DefaultPageLayout } from './ui/layouts/DefaultPageLayout';
import { FeatherFileText } from '@subframe/core';
import { FeatherMap } from '@subframe/core';
import { FeatherMapPin } from '@subframe/core';
import { FeatherMic } from '@subframe/core';
import { FeatherSend } from '@subframe/core';
import { FeatherTag } from '@subframe/core';
import { FeatherUploadCloud } from '@subframe/core';
import { Link } from 'react-router-dom';

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function ReportAnIssue() {
  return (
    <DefaultPageLayout>
      <motion.div
        className="flex h-full w-full flex-col items-center gap-6 bg-default-background py-8 md:py-12 px-4 md:px-6"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex w-full max-w-[768px] flex-col items-start gap-6 rounded-xl border border-solid border-neutral-border bg-white px-6 md:px-12 py-8 md:py-12 shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex w-full flex-col items-start gap-2"
            variants={itemVariants}
          >
            <span className="text-heading-1 md:text-heading-1 font-heading-1 text-default-font">
              Report a Civic Issue
            </span>
            <span className="text-body font-body text-subtext-color">
              Help us improve your community by reporting local issues.
              We&#39;ll make sure it gets to the right department.
            </span>
          </motion.div>

          <motion.div className='w-full
          ' variants={itemVariants}>
            <TextField
              className="h-auto w-full flex-none"
              label="Issue Category"
              helpText="Select or type a category that best describes the issue"
              icon={<FeatherTag />}
            >
              <TextField.Input
                placeholder="Search or enter category"
                value=""
                onChange={(event) => {}}
              />
            </TextField>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-start gap-2"
            variants={itemVariants}
          >
            <span className="text-body-bold font-body-bold text-default-font">
              Upload Photo
            </span>
            <motion.div
              className="flex w-full flex-col items-center justify-center gap-4 rounded-md border border-dashed border-brand-600 bg-brand-50 px-6 md:px-12 py-8 md:py-12 cursor-pointer"
              whileHover={{ scale: 1.02, borderColor: "rgb(37, 99, 235)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FeatherUploadCloud className="text-heading-1 font-heading-1 text-brand-700" />
              </motion.div>
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-body font-body text-default-font text-center">
                  Click to select files or drag to upload
                </span>
                <span className="text-caption font-caption text-subtext-color text-center">
                  Supported: JPG, PNG (Max 5MB)
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-start gap-4"
            variants={itemVariants}
          >
            <span className="text-body-bold font-body-bold text-default-font">
              Location
            </span>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                icon={<FeatherMapPin />}
                onClick={(event) => {}}
              >
                Detect My Location
              </Button>
            </motion.div>
            <TextField
              className="h-auto w-full flex-none"
              label="Problem Address"
              helpText="Please provide the address if location detection fails"
              icon={<FeatherMap />}
            >
              <TextField.Input
                placeholder="Enter the street address"
                value=""
                onChange={(event) => {}}
              />
            </TextField>
          </motion.div>

          <motion.div className='w-full' variants={itemVariants}>
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
                onChange={(event) => {}}
              />
            </TextField>
          </motion.div>

          <motion.div
          className='w-full'
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/issue-report">
            <Button
              className="h-10 w-full flex-none"
              size="large"
              icon={<FeatherSend />}
              onClick={(event) => {}}
            >
              Submit Report
            </Button></Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </DefaultPageLayout>
  );
}

export default ReportAnIssue;
