"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 text-sm font-medium text-[#3B82F6]">
              <Mail className="w-4 h-4" />
              Get in Touch
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
              Interested in pilots, partnerships, or <span className="text-[#3B82F6]">early access?</span>
            </h2>

            {/* Body Text */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              We're currently onboarding a small group of early adopters — creators, agencies, and teams who want to
              co-shape the product and get closer access to our roadmap.
            </p>

            <div className="inline-flex items-center gap-4 bg-gray-50 rounded-2xl p-4 pr-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Prefer email?</p>
                <p className="font-semibold text-foreground">hi@luminacore.ai</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl border-gray-200 bg-gray-50/50 placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-gray-200 bg-gray-50/50 placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                />
              </div>

              {/* Company / Organization */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company / Organization
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 rounded-xl border-gray-200 bg-gray-50/50 placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium text-foreground">
                  Role
                </Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="e.g., Content Manager, Founder"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="h-12 rounded-xl border-gray-200 bg-gray-50/50 placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                />
              </div>

              {/* Use Case */}
              <div className="space-y-2">
                <Label htmlFor="useCase" className="text-sm font-medium text-foreground">
                  What are you looking to use LuminaCore for?
                </Label>
                <Textarea
                  id="useCase"
                  placeholder="Tell us about your use case..."
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                  className="min-h-[100px] rounded-xl border-gray-200 bg-gray-50/50 placeholder:text-muted-foreground/60 focus:border-[#3B82F6] focus:ring-[#3B82F6] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-[#3B82F6] text-white hover:bg-[#2563EB] font-medium text-base gap-2"
              >
                Request early access
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
