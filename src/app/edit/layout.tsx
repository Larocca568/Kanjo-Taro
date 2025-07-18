'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React, { Children } from "react";
import Sidebar from "../component/sidebar";
import Link from'next/link';
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="flex">
       <Sidebar />
        <main className="flex-grow-[1]">
        {children}
        </main>
        </div>
  )
}
