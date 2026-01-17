"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
  CreditCard,
  Shield,
  User,
  Mail,
  Phone,
  Briefcase,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"

const consultationTypes = [
  {
    id: "profile-evaluation",
    name: "Profile Evaluation",
    duration: "30 minutes",
    price: 75,
    description: "Quick assessment of your eligibility for EB-2 NIW or EB-1A",
  },
  {
    id: "strategy-session",
    name: "Strategy Session",
    duration: "60 minutes",
    price: 150,
    description: "In-depth strategy discussion and roadmap planning",
  },
  {
    id: "comprehensive-review",
    name: "Comprehensive Review",
    duration: "90 minutes",
    price: 250,
    description: "Complete profile analysis with detailed action plan",
  },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
]

// Generate calendar days
const generateCalendarDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return days
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    country: "",
    visaType: "",
    message: "",
  })

  const calendarDays = generateCalendarDays(currentYear, currentMonth)
  const today = new Date()

  const selectedConsultation = consultationTypes.find((t) => t.id === selectedType)

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const isDateDisabled = (day: number | null) => {
    if (!day) return true
    const date = new Date(currentYear, currentMonth, day)
    const dayOfWeek = date.getDay()
    return date < today || dayOfWeek === 0 || dayOfWeek === 6
  }

  const handleDateSelect = (day: number) => {
    if (!isDateDisabled(day)) {
      setSelectedDate(new Date(currentYear, currentMonth, day))
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedType !== null
      case 2:
        return selectedDate !== null && selectedTime !== null
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      default:
        return true
    }
  }

  const handleNext = () => {
    if (canProceed() && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-foreground overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background mb-6">
              Book Your <span className="text-gradient">Consultation</span>
            </h1>
            <p className="text-lg text-background/70">Schedule a personalized session with our immigration experts</p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[
              { step: 1, label: "Select Service" },
              { step: 2, label: "Choose Date & Time" },
              { step: 3, label: "Your Details" },
              { step: 4, label: "Payment" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                      currentStep >= item.step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {currentStep > item.step ? <Check className="w-5 h-5" /> : item.step}
                  </div>
                  <span
                    className={cn(
                      "hidden md:block text-sm font-medium transition-colors",
                      currentStep >= item.step ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                </div>
                {index < 3 && (
                  <div
                    className={cn(
                      "w-12 md:w-20 h-0.5 transition-colors",
                      currentStep > item.step ? "bg-primary" : "bg-muted",
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Select Your Consultation Type</h2>
                  <p className="text-muted-foreground">Choose the service that best fits your needs</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {consultationTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg",
                        selectedType === type.id
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-border hover:border-primary/50",
                      )}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                            selectedType === type.id ? "bg-primary text-primary-foreground" : "bg-muted",
                          )}
                        >
                          <Clock className="w-6 h-6" />
                        </div>
                        <span className="text-sm text-muted-foreground">{type.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{type.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">${type.price}</span>
                        <span className="text-muted-foreground">USD</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Choose Date & Time */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Choose Your Date & Time</h2>
                  <p className="text-muted-foreground">
                    Select a convenient time for your {selectedConsultation?.name}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <div className="flex items-center justify-between mb-6">
                      <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="text-lg font-semibold">
                        {monthNames[currentMonth]} {currentYear}
                      </h3>
                      <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center mb-2">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-xs font-medium text-muted-foreground py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((day, index) => (
                        <button
                          key={index}
                          onClick={() => day && handleDateSelect(day)}
                          disabled={isDateDisabled(day)}
                          className={cn(
                            "aspect-square rounded-lg text-sm font-medium transition-all duration-200",
                            !day && "invisible",
                            day && isDateDisabled(day) && "text-muted-foreground/50 cursor-not-allowed",
                            day && !isDateDisabled(day) && "hover:bg-primary/10 hover:text-primary",
                            selectedDate?.getDate() === day &&
                              selectedDate?.getMonth() === currentMonth &&
                              selectedDate?.getFullYear() === currentYear &&
                              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                          )}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Available Time Slots
                    </h3>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 border",
                              selectedTime === time
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border hover:border-primary hover:bg-primary/5",
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-64 text-muted-foreground">
                        <div className="text-center">
                          <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>Please select a date first</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Your Details */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Your Details</h2>
                  <p className="text-muted-foreground">
                    Tell us about yourself so we can prepare for your consultation
                  </p>
                </div>
                <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 801 234 5678"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation" className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        Occupation
                      </Label>
                      <Input
                        id="occupation"
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        placeholder="Software Engineer"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        Country of Residence
                      </Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Nigeria"
                        className="h-12"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="visaType">Interested Visa Type</Label>
                      <select
                        id="visaType"
                        value={formData.visaType}
                        onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select visa type</option>
                        <option value="eb2-niw">EB-2 NIW (National Interest Waiver)</option>
                        <option value="eb1a">EB-1A (Extraordinary Ability)</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your background and what you hope to achieve..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Complete Your Booking</h2>
                  <p className="text-muted-foreground">Review your details and proceed to payment</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Order Summary */}
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <h3 className="text-xl font-semibold mb-6">Booking Summary</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-medium">{selectedConsultation?.name}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{selectedConsultation?.duration}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Name</span>
                        <span className="font-medium">
                          {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Email</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between py-4 text-lg">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-primary">${selectedConsultation?.price} USD</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Payment Details
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input id="cardName" placeholder="John Doe" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="h-12" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" className="h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" className="h-12" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>Your payment is secured with 256-bit SSL encryption</span>
                      </div>
                      <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-xl">
                        Pay ${selectedConsultation?.price} USD
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="h-12 px-8 rounded-full bg-transparent"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              {currentStep < 4 && (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
