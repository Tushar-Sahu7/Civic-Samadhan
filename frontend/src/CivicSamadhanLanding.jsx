'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from './ui/components/Accordion';
import { Avatar } from './ui/components/Avatar';
import { Badge } from './ui/components/Badge';
import { Button } from './ui/components/Button';
import { IconButton } from './ui/components/IconButton';
import { IconWithBackground } from './ui/components/IconWithBackground';
import { LinkButton } from './ui/components/LinkButton';
import { Progress } from './ui/components/Progress';
import { DefaultPageLayout } from './ui/layouts/DefaultPageLayout';
import { FeatherActivity } from '@subframe/core';
import { FeatherAlertCircle } from '@subframe/core';
import { FeatherAlertTriangle } from '@subframe/core';
import { FeatherArrowRight } from '@subframe/core';
import { FeatherCheckCircle } from '@subframe/core';
import { FeatherCheckSquare } from '@subframe/core';
import { FeatherClipboard } from '@subframe/core';
import { FeatherDroplet } from '@subframe/core';
import { FeatherGithub } from '@subframe/core';
import { FeatherLightbulb } from '@subframe/core';
import { FeatherMap } from '@subframe/core';
import { FeatherMapPin } from '@subframe/core';
import { FeatherMessageSquare } from '@subframe/core';
import { FeatherMic } from '@subframe/core';
import { FeatherMoreVertical } from '@subframe/core';
import { FeatherNavigation } from '@subframe/core';
import { FeatherRadio } from '@subframe/core';
import { FeatherShoppingBag } from '@subframe/core';
import { FeatherSlack } from '@subframe/core';
import { FeatherStar } from '@subframe/core';
import { FeatherThumbsDown } from '@subframe/core';
import { FeatherThumbsUp } from '@subframe/core';
import { FeatherTool } from '@subframe/core';
import { FeatherTwitter } from '@subframe/core';
import { FeatherUsers } from '@subframe/core';
import { FeatherYoutube } from '@subframe/core';
import { FeatherZap } from '@subframe/core';
import AutoImageSlider from './AutoImageSlider';
import ReportAnIssue from './ReportAnIssue';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

function CivicSamadhanLanding() {
  return (
    <DefaultPageLayout>
      <motion.div
        className="container max-w-none flex w-full flex-col items-center gap-12 md:gap-24 py-8 md:py-16 px-4 md:px-6 shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex w-full max-w-[1280px] flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex w-full lg:min-w-[448px] lg:grow lg:shrink-0 lg:basis-0 flex-col items-start gap-6 md:gap-8"
            variants={itemVariants}
          >
            <div className="flex flex-col items-start gap-6">
              <motion.div
                className="items-center gap-2 rounded-full px-4 py-2 inline-flex bg-gradient-to-r border border-brand-200 transition-all duration-300 cursor-pointer from-brand-500 to-purple-500 backdrop-blur-xl shadow-xl"
                animate={pulseAnimation}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IconWithBackground
                    variant="warning"
                    size="small"
                    icon={<FeatherZap />}
                  />
                </motion.div>
                <span className="text-caption-bold font-caption-bold text-white">
                  AI-Powered Civic Solutions
                </span>
              </motion.div>
              <motion.span
                className="text-heading-2 md:text-heading-1 font-heading-1 text-default-font text-center lg:text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Fix Your Neighborhood in{' '}
                <motion.span
                  className="bg-gradient-to-r to-purple-500 from-blue-500 text-transparent bg-clip-text text-4xl md:text-5xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  30
                </motion.span>{' '}
                Seconds
              </motion.span>
              <motion.span
                className="text-body md:text-heading-3 font-body md:font-heading-3 text-subtext-color text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Report local issues, track progress, and join your community in
                making your city better with AI-powered insights.
              </motion.span>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link to={"/report-an-issue"}>
                <Button
                  className="hover:shadow-md:hover hover:shadow-md transition-all duration-300 shadow-sm w-full sm:w-auto"
                  variant="brand-primary"
                  size="large"
                  icon={<FeatherAlertCircle />}
                  onClick={(event) => {}}
                >
                  Report an Issue Now
                </Button></Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  className="border hover:shadow-md:hover hover:shadow-md transition-all duration-300 shadow-sm w-full sm:w-auto"
                  variant="neutral-primary"
                  size="large"
                  icon={<FeatherMap />}
                  onClick={(event) => {}}
                >
                  See Issues in your area
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex w-full lg:min-w-[320px] lg:grow lg:shrink-0 lg:basis-0 items-center justify-center mt-8 lg:mt-0"
            variants={itemVariants}
            animate={floatingAnimation}
          >
            <AutoImageSlider />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex w-full max-w-[1280px] flex-col items-center gap-8 md:gap-16 px-4 md:px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-heading-3 md:text-heading-2 font-heading-2 text-default-font text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            How We Empower Citizen&#39;s
          </motion.span>
          <motion.div
            className="flex w-full flex-col md:flex-row items-start gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-start gap-6 rounded-xl bg-brand-100 px-6 md:px-8 py-6 md:py-8 shadow-lg bg-gradient-to-br from-white"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <IconWithBackground
                  size="large"
                  icon={<FeatherMic />}
                  square={true}
                />
              </motion.div>
              <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                Your Voice Matters
              </span>
              <span className="text-body font-body text-subtext-color">
                File a complaint with just one tap – text, photo, or voice.
                Every problem deserves to be heard and acted upon.
              </span>
            </motion.div>
            <motion.div
              className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-start gap-6 rounded-xl bg-brand-100 px-6 md:px-8 py-6 md:py-8 shadow-lg bg-gradient-to-br from-white"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <IconWithBackground
                  size="large"
                  icon={<FeatherUsers />}
                  square={true}
                />
              </motion.div>
              <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                Power in Numbers
              </span>
              <span className="text-body font-body text-subtext-color">
                See what others in your area are facing, and add your support
                with one click. Together, your voice becomes unstoppable.
              </span>
            </motion.div>
            <motion.div
              className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-start gap-6 rounded-xl bg-brand-100 px-6 md:px-8 py-6 md:py-8 shadow-lg bg-gradient-to-br from-white"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <IconWithBackground
                  size="large"
                  icon={<FeatherCheckSquare />}
                  square={true}
                />
              </motion.div>
              <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                Real Action, Real Results
              </span>
              <span className="text-body font-body text-subtext-color">
                From complaint to resolution – get live updates and hold
                departments accountable until your issue is completely solved.
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.span
          className="text-heading-3 md:text-heading-2 font-heading-2 text-default-font text-center px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Milestones
        </motion.span>
        <motion.div
          className="flex w-full max-w-[1280px] flex-col md:flex-row gap-6 md:gap-8 items-stretch px-4 md:px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-success-400 bg-success-100 px-6 md:px-8 py-6 md:py-8 shadow-lg bg-gradient-to-br from-white"
            variants={itemVariants}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.2)",
              borderColor: "rgb(34, 197, 94)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <IconWithBackground
                  variant="success"
                  size="medium"
                  icon={<FeatherCheckCircle />}
                />
              </motion.div>
              <span className="text-heading-3 font-heading-3 text-default-font">
                10,000+ Issues Resolved
              </span>
            </div>
            <motion.span
              className="text-heading-1 font-heading-1 text-default-font bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              75%
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <Progress className="h-2" value={75} />
            </motion.div>
            <span className="text-body font-body text-subtext-color">
              Faster resolution time compared to traditional methods
            </span>
          </motion.div>
          <motion.div
            className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-brand-400 bg-brand-100 px-6 md:px-8 py-6 md:py-8 shadow-lg bg-gradient-to-br from-white"
            variants={itemVariants}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)",
              borderColor: "rgb(59, 130, 246)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <IconWithBackground
                  size="medium"
                  icon={<FeatherUsers />}
                />
              </motion.div>
              <span className="text-heading-3 font-heading-3 text-default-font">
                Active Community
              </span>
            </div>
            <motion.span
              className="text-heading-1 font-heading-1 text-default-font bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              50K+
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <Progress className="h-2" value={80} />
            </motion.div>
            <span className="text-body font-body text-subtext-color">
              Engaged citizens improving their neighborhoods
            </span>
          </motion.div>
          <motion.div
            className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-warning-400 bg-warning-100 px-6 md:px-8 py-6 md:py-8 shadow-lg bg-gradient-to-br from-white"
            variants={itemVariants}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0 25px 50px rgba(245, 158, 11, 0.2)",
              borderColor: "rgb(245, 158, 11)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <IconWithBackground
                  variant="warning"
                  size="medium"
                  icon={<FeatherMapPin />}
                />
              </motion.div>
              <span className="text-heading-3 font-heading-3 text-default-font">
                Cities Covered
              </span>
            </div>
            <motion.span
              className="text-heading-1 font-heading-1 text-default-font bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              15+
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <Progress className="h-2" value={60} />
            </motion.div>
            <span className="text-body font-body text-subtext-color">
              Municipalities using our platform
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex w-full max-w-[1280px] flex-col items-center gap-8 md:gap-16 px-4 md:px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-heading-3 md:text-heading-2 font-heading-2 text-default-font text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            How It Works
          </motion.span>
          <motion.div
            className="flex w-full flex-col md:flex-row gap-6 md:gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-center gap-6 rounded-xl px-6 md:px-8 py-8 md:py-10 shadow-lg bg-gradient-to-br from-white"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <IconWithBackground
                  size="x-large"
                  icon={<FeatherClipboard />}
                  square={true}
                />
              </motion.div>
              <div className="flex flex-col items-center gap-3">
                <motion.span
                  className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link to="/report-an-issue">Report an Issue</Link>
                </motion.span>
                <motion.span
                  className="text-body font-body text-subtext-color text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Submit your complaint in 30 seconds with photo and location
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-center gap-6 rounded-xl px-6 md:px-8 py-8 md:py-10 shadow-lg bg-gradient-to-br from-white"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(34, 197, 94, 0.05)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <IconWithBackground
                  size="x-large"
                  icon={<FeatherActivity />}
                  square={true}
                />
              </motion.div>
              <div className="flex flex-col items-center gap-3">
                <motion.span
                  className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Track Progress
                </motion.span>
                <motion.span
                  className="text-body font-body text-subtext-color text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  Get real-time updates as your issue is being addressed
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              className="flex w-full md:grow md:shrink-0 md:basis-0 flex-col items-center gap-6 rounded-xl px-6 md:px-8 py-8 md:py-10 shadow-lg bg-gradient-to-br from-white"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                backgroundColor: "rgba(168, 85, 247, 0.05)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <IconWithBackground
                  size="x-large"
                  icon={<FeatherCheckSquare />}
                  square={true}
                />
              </motion.div>
              <div className="flex flex-col items-center gap-3">
                <motion.span
                  className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  Resolution &amp; Feedback
                </motion.span>
                <motion.span
                  className="text-body font-body text-subtext-color text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Rate the solution and help improve city services
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-16">
          <div className="flex w-full max-w-[1280px] flex-wrap gap-6 items-stretch">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 transition-all duration-300">
              <div className="flex w-full items-center justify-between px-2 py-2">
                <div className="flex items-center gap-2">
                  <IconWithBackground
                    variant="error"
                    size="large"
                    icon={<FeatherMapPin />}
                    square={true}
                  />
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Nearby Issues
                  </span>
                </div>
                <Button
                  variant="brand-secondary"
                  size="small"
                  icon={<FeatherMapPin />}
                  onClick={(event) => {}}
                >
                  Use My Location
                </Button>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-center justify-center overflow-hidden rounded-md border border-solid border-neutral-border">
                  <img
                    className="grow shrink-0 basis-0 rounded-md border border-solid border-neutral-border flex items-center justify-center overflow-hidden"
                    src="https://res.cloudinary.com/subframe/image/upload/v1711417576/shared/bsa3eonjzvhxusz9aqgr.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
                  <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                    <img
                      className="grow shrink-0 basis-0 self-stretch object-cover"
                      src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c"
                    />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FeatherAlertTriangle className="text-body font-body text-error-600" />
                        <span className="text-heading-3 font-heading-3 text-default-font">
                          Issue #101 Large pothole on Main Street
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="error">High Priority</Badge>
                          <Badge variant="warning">In Progress</Badge>
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <IconButton
                          size="small"
                          icon={<FeatherMoreVertical />}
                          onClick={(
                            event
                          ) => {}}
                        />
                      </div>
                    </div>
                    <span className="text-body font-body text-subtext-color">
                      Deep pothole causing traffic hazard, multiple vehicles
                      reported damage. Requires immediate attention.
                    </span>
                    <div className="flex w-full flex-wrap items-center gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FeatherUsers className="text-body font-body text-subtext-color" />
                          <div className="flex items-center gap-1">
                            <Avatar
                              size="small"
                              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                            >
                              JS
                            </Avatar>
                            <span className="text-body font-body text-subtext-color">
                              2 Staff Assigned
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          8 Complaints
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMapPin className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          123 Main Street, Downtown
                        </span>
                        <div className="flex items-center gap-2">
                          <LinkButton
                            variant="brand"
                            size="small"
                            icon={<FeatherNavigation />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            Get Directions
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4">
                      <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                        Reported 2 hrs ago
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-body font-body text-subtext-color">
                          Are you facing this issue too?
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsUp />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            Yes
                          </Button>
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsDown />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            No
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
                  <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                    <img
                      className="grow shrink-0 basis-0 self-stretch object-cover"
                      src="https://images.unsplash.com/photo-1572991506264-0e5eca2fa71b"
                    />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FeatherLightbulb className="text-body font-body text-warning-600" />
                        <span className="text-heading-3 font-heading-3 text-default-font">
                          Issue #89 Broken streetlight at Park Avenue
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="warning">Medium Priority</Badge>
                          <Badge>Under Review</Badge>
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <IconButton
                          size="small"
                          icon={<FeatherMoreVertical />}
                          onClick={(
                            event
                          ) => {}}
                        />
                      </div>
                    </div>
                    <span className="text-body font-body text-subtext-color">
                      Street light has been flickering for weeks and finally
                      went out completely. Safety concern for evening
                      pedestrians.
                    </span>
                    <div className="flex w-full flex-wrap items-center gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FeatherUsers className="text-body font-body text-subtext-color" />
                          <div className="flex items-center gap-1">
                            <Avatar
                              size="small"
                              image="https://images.unsplash.com/photo-1494790108755-2616b612b950"
                            >
                              MW
                            </Avatar>
                            <span className="text-body font-body text-subtext-color">
                              1 Staff Assigned
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          3 Complaints
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMapPin className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          Park Avenue &amp; 5th Street
                        </span>
                        <div className="flex items-center gap-2">
                          <LinkButton
                            variant="brand"
                            size="small"
                            icon={<FeatherNavigation />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            Get Directions
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4">
                      <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                        Reported 1 day ago
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-body font-body text-subtext-color">
                          Are you facing this issue too?
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsUp />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            Yes
                          </Button>
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsDown />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            No
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
                  <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                    <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                      <img
                        className="grow shrink-0 basis-0 self-stretch object-cover"
                        src="https://images.unsplash.com/photo-1572991506264-0e5eca2fa71b"
                      />
                    </div>
                    <img className="grow shrink-0 basis-0 self-stretch object-cover" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FeatherDroplet className="text-body font-body text-success-600" />
                        <span className="text-heading-3 font-heading-3 text-default-font">
                          Issue #67 Water leak near bus stop
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="neutral">Low Priority</Badge>
                          <Badge variant="success">Resolved</Badge>
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <IconButton
                          size="small"
                          icon={<FeatherMoreVertical />}
                          onClick={(
                            event
                          ) => {}}
                        />
                      </div>
                    </div>
                    <span className="text-body font-body text-subtext-color">
                      Small water leak creating puddle near Central Bus Stop.
                      Issue has been successfully repaired by utilities team.
                    </span>
                    <div className="flex w-full flex-wrap items-center gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FeatherUsers className="text-body font-body text-subtext-color" />
                          <div className="flex items-center gap-1">
                            <Avatar
                              size="small"
                              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                            >
                              TH
                            </Avatar>
                            <span className="text-body font-body text-subtext-color">
                              Completed by Team
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          2 Complaints
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMapPin className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          Central Bus Stop, Oak Street
                        </span>
                        <div className="flex items-center gap-2">
                          <LinkButton
                            variant="brand"
                            size="small"
                            icon={<FeatherNavigation />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            Get Directions
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4">
                      <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                        Reported 5 days ago
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-body font-body text-success-600">
                          Issue resolved - How was the solution?
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="brand-secondary"
                            icon={<FeatherStar />}
                            onClick={(
                              event
                            ) => {}}
                          >
                            Rate Solution
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="text-heading-3 md:text-heading-2 font-heading-2 text-default-font text-center px-4">
          Testimonials
        </span>
        <div className="flex w-full max-w-[1280px] flex-col gap-6 items-stretch px-4 md:px-6">
          <div className="items-start gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  square={true}
                >
                  JS
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    John Smith
                  </span>
                  <Badge variant="success">Verified Resident</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;The response time has improved dramatically. Our
                neighborhood&#39;s street lighting issue was fixed within 3 days
                of reporting!&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherCheckCircle className="text-body font-body text-success-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Street Lighting Project
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1"
                  square={true}
                >
                  LM
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Lisa Martinez
                  </span>
                  <Badge variant="success">Community Leader</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;This platform has transformed how we collaborate with
                local authorities. It&#39;s transparent and efficient.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherUsers className="text-body font-body text-brand-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Community Engagement
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                  square={true}
                >
                  DK
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    David Kim
                  </span>
                  <Badge variant="success">Active Citizen</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;Never thought reporting a pothole could be this easy. Got
                fixed in less than a week!&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherTool className="text-body font-body text-warning-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Road Maintenance
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1548142813-c348350df52b"
                  square={true}
                >
                  ES
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Emily Santos
                  </span>
                  <Badge variant="success">Urban Planner</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;The platform provides unprecedented insights into urban
                infrastructure challenges. It&#39;s a game-changer for city
                management.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherMap className="text-body font-body text-brand-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Urban Planning
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  square={true}
                >
                  RG
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Rachel Green
                  </span>
                  <Badge variant="success">Local Business Owner</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;As a small business owner, this platform helps me stay
                connected with local community needs and improvements.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherShoppingBag className="text-body font-body text-warning-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Local Business Impact
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  square={true}
                >
                  MW
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Michael Wong
                  </span>
                  <Badge variant="success">Community Tech Advocate</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;Technology is bridging the gap between citizens and local
                government. This platform is proof of that.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherRadio className="text-body font-body text-brand-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Civic Technology
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-8 md:gap-12 px-4 md:px-6">
          <span className="text-heading-3 md:text-heading-2 font-heading-2 text-default-font text-center">
            Frequently Asked Questions
          </span>
          <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'How do I report an issue in my neighborhood?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      "Simply click the 'Report an Issue Now' button on the homepage. You can submit a photo, describe the problem, and specify the location in just 30 seconds.\n"
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'Is my personal information safe?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      'Absolutely. We protect your privacy and only share anonymized data with local authorities to help improve community services.\n'
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'What types of issues can I report?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      'From street lighting and road maintenance to public safety and infrastructure problems, we cover a wide range of community issues.\n'
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'How quickly are issues resolved?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      "Our platform has reduced resolution times by 75%. Most issues are addressed within 1-2 weeks, and you'll receive real-time updates.\n"
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'Where I can track my complains?'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      'No technical skills required. Our platform is designed to be user-friendly and intuitive, allowing anyone to report issues in just a few clicks.\n'
                    }
                  </span>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
        <motion.div
          className="flex w-full max-w-[768px] flex-col items-center gap-6 rounded-3xl bg-default-background px-6 md:px-12 py-8 md:py-12 shadow-lg mx-4"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.span
            className="text-heading-2 md:text-heading-1 font-heading-1 text-default-font text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your City Needs Your Voice
          </motion.span>
          <motion.span
            className="text-body font-body text-subtext-color text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join thousands of citizens making their communities better, one
            report at a time
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="hover:shadow-lg:hover hover:shadow-lg shadow-md transition-all duration-200"
              size="large"
              icon={<FeatherArrowRight />}
              onClick={(event) => {}}
            >
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
        <div className="flex w-full flex-col items-center justify-center gap-2 border-t border-solid border-neutral-border bg-default-background px-6 py-12">
          <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6">
            <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch">
              <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-center justify-center gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2">
                  <img
                    className="h-12 w-12 flex-none object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1757931375/uploads/11326/atljsxvavonvkzgwwtmx.svg"
                  />
                  <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font text-center">
                    Civic Samadhan
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-2">
                <IconButton
                  icon={<FeatherTwitter />}
                  onClick={(event) => {}}
                />
                <IconButton
                  icon={<FeatherGithub />}
                  onClick={(event) => {}}
                />
                <IconButton
                  icon={<FeatherSlack />}
                  onClick={(event) => {}}
                />
                <IconButton
                  icon={<FeatherYoutube />}
                  onClick={(event) => {}}
                />
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-4 self-stretch">
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Product
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Features
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Integrations
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Docs
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Download
                </span>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Company
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  About us
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Blog
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Customers
                </span>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Resources
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Community
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Contact
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Privacy Policy
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Terms of Service
                </span>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Developers
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  API
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Status
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Github
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DefaultPageLayout>
  );
}

export default CivicSamadhanLanding;
