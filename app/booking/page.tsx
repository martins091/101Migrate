"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Script from "next/script"
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
    price: 200,
    description: "In-depth strategy discussion and roadmap planning",
  },
  {
    id: "comprehensive-review",
    name: "Comprehensive Review",
    duration: "90 minutes",
    price: 300,
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
  const [isProcessing, setIsProcessing] = useState(false)

  const calendarDays = generateCalendarDays(currentYear, currentMonth)
  const today = new Date()

  const selectedConsultation = consultationTypes.find((t) => t.id === selectedType)

 // Function to send emails
const sendEmailNotification = async (paymentReference: string) => {
  try {
    // Format the date for display
    const formattedDate = selectedDate?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Format date for admin (simpler format)
    const adminFormattedDate = selectedDate?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    // Send to customer
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: formData.email,
        subject: `Payment Confirmation - ${selectedConsultation?.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #10B981;">✅ Payment Confirmed!</h1>
            
            <p>Dear <strong>${formData.firstName} ${formData.lastName}</strong>,</p>
            
            <p>Thank you for your payment! Your <strong>${selectedConsultation?.name}</strong> has been successfully booked.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10B981;">
              <h2 style="color: #374151; margin-top: 0;">📅 Your Consultation Details:</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;"><strong>Service:</strong></td>
                  <td style="padding: 8px 0;">${selectedConsultation?.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;"><strong>Date:</strong></td>
                  <td style="padding: 8px 0;"><strong>${formattedDate || 'Not specified'}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;"><strong>Time:</strong></td>
                  <td style="padding: 8px 0;"><strong>${selectedTime || 'Not specified'}</strong> (Eastern Time)</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;"><strong>Duration:</strong></td>
                  <td style="padding: 8px 0;">${selectedConsultation?.duration}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;"><strong>Amount Paid:</strong></td>
                  <td style="padding: 8px 0;">$${selectedConsultation?.price} USD</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;"><strong>Payment Reference:</strong></td>
                  <td style="padding: 8px 0; font-family: monospace;">${paymentReference}</td>
                </tr>
              </table>
            </div>
            
            <h3>📝 Next Steps:</h3>
            <ol style="color: #4B5563;">
              <li>Our team will confirm your booking within 24 hours</li>
              <li>You'll receive a calendar invitation with the Zoom/Google Meet link</li>
              <li>Please prepare any questions or documents you'd like to discuss</li>
            </ol>
            
            <div style="background-color: #DBEAFE; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0;"><strong>⚠️ Important:</strong> Please mark your calendar for:</p>
              <p style="margin: 8px 0 0 0; font-size: 18px; font-weight: bold;">
                ${formattedDate || 'Date not set'} at ${selectedTime || 'Time not set'} (Eastern Time)
              </p>
            </div>
            
            <p>If you need to reschedule or have any questions, please reply to this email.</p>
            
            <p style="color: #6B7280;">Best regards,<br>
            <strong>The Immigration Consultation Team</strong></p>
            
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;">
            
            <p style="color: #9CA3AF; font-size: 12px;">
              This is an automated message. Please do not reply directly to this email.<br>
              If you have questions, contact us at: support@yourdomain.com
            </p>
          </div>
        `,
      }),
    })

    // Send to admin
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: process.env.ADMIN_EMAIL || 'admin@yourdomain.com',
        subject: `📅 NEW BOOKING: ${selectedConsultation?.name} - ${formData.firstName} ${formData.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
            <h1 style="color: #1E40AF;">💰 NEW PAYMENT RECEIVED</h1>
            
            <div style="background-color: #EFF6FF; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1E40AF;">
              <h2 style="color: #1E40AF; margin-top: 0;">👤 Customer Information</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; width: 150px; color: #4B5563;"><strong>Full Name:</strong></td>
                  <td style="padding: 8px 0;">${formData.firstName} ${formData.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0;">${formData.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563;"><strong>Occupation:</strong></td>
                  <td style="padding: 8px 0;">${formData.occupation || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563;"><strong>Country:</strong></td>
                  <td style="padding: 8px 0;">${formData.country || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #4B5563;"><strong>Visa Interest:</strong></td>
                  <td style="padding: 8px 0;">${formData.visaType || 'Not specified'}</td>
                </tr>
              </table>
              
              ${formData.message ? `
                <h3 style="color: #4B5563;">📝 Additional Notes from Customer:</h3>
                <div style="background-color: white; padding: 15px; border-radius: 6px; margin: 10px 0; border: 1px solid #E5E7EB;">
                  <p style="margin: 0; font-style: italic;">"${formData.message}"</p>
                </div>
              ` : ''}
            </div>
            
            <div style="background-color: #FEF3C7; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D97706;">
              <h2 style="color: #92400E; margin-top: 0;">📅 BOOKING DETAILS</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; width: 150px; color: #92400E;"><strong>Service:</strong></td>
                  <td style="padding: 10px 0; font-weight: bold;">${selectedConsultation?.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #92400E;"><strong>Date:</strong></td>
                  <td style="padding: 10px 0;">
                    <span style="background-color: #FDE68A; padding: 4px 8px; border-radius: 4px; font-weight: bold;">
                      ${formattedDate || 'Date not set'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #92400E;"><strong>Time:</strong></td>
                  <td style="padding: 10px 0;">
                    <span style="background-color: #FDE68A; padding: 4px 8px; border-radius: 4px; font-weight: bold;">
                      ${selectedTime || 'Time not set'} EST
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #92400E;"><strong>Duration:</strong></td>
                  <td style="padding: 10px 0;">${selectedConsultation?.duration}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #92400E;"><strong>Amount:</strong></td>
                  <td style="padding: 10px 0; font-size: 18px; color: #065F46; font-weight: bold;">
                    $${selectedConsultation?.price} USD
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #92400E;"><strong>Payment Ref:</strong></td>
                  <td style="padding: 10px 0; font-family: monospace; background-color: #F3F4F6; padding: 6px; border-radius: 4px;">
                    ${paymentReference}
                  </td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #D1FAE5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10B981;">
              <h2 style="color: #065F46; margin-top: 0;">✅ ACTION REQUIRED</h2>
              <ol>
                <li><strong>Schedule the consultation</strong> in your calendar</li>
                <li><strong>Send calendar invitation</strong> to ${formData.email}</li>
                <li><strong>Include Zoom/Google Meet link</strong> in the invitation</li>
                <li><strong>Confirm with customer</strong> via email</li>
              </ol>
              
              <div style="margin-top: 15px;">
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}&details=${encodeURIComponent(`Consultation Type: ${selectedConsultation?.name}\nClient: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nVisa Interest: ${formData.visaType || 'Not specified'}`)}&location=Zoom/Google+Meet&dates=${selectedDate ? selectedDate.toISOString().replace(/-|:|\.\d+/g, '') : ''}" 
                   style="background-color: #10B981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  📅 Add to Google Calendar
                </a>
              </div>
            </div>
            
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;">
            
            <p style="color: #6B7280; font-size: 14px;">
              This booking was created on ${new Date().toLocaleString()} via the website booking system.
            </p>
          </div>
        `,
        adminNotification: true,
      }),
    })

  } catch (error) {
    console.error('Failed to send email:', error)
    // Don't alert the user - just log it
  }
}

// Paystack payment function - FIXED VERSION
const payWithPaystack = () => { // Remove async here
  if (!selectedConsultation || !formData.email) {
    alert("Missing booking or email information");
    return;
  }

  // Check if Paystack key exists
  const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  
  if (!paystackKey) {
    alert("Payment system is not configured. Please contact support.");
    return;
  }

  // Validate key format
  if (!paystackKey.startsWith('pk_')) {
    alert("Invalid payment configuration. Please contact support.");
    return;
  }

  setIsProcessing(true);

  // Create the callback function separately (NOT async)
  const paymentCallback = function (response: any) {
    console.log("Payment success callback triggered:", response);

    // Handle email sending after payment
    sendEmailNotification(response.reference)
      .then(() => {
        alert("✅ Payment successful! Check your email for confirmation.");
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("✅ Payment successful! (Email confirmation may be delayed)");
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  // Create onClose function
  const paymentOnClose = function () {
    console.log("Payment window closed");
    alert("Payment cancelled. You can try again.");
    setIsProcessing(false);
  };

  try {
    const handler = (window as any).PaystackPop.setup({
      key: paystackKey,
      email: formData.email,
      amount: selectedConsultation.price * 100,
      currency: "USD",
      ref: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      metadata: {
        customer_name: `${formData.firstName} ${formData.lastName}`,
        customer_phone: formData.phone,
        service: selectedConsultation.name,
        booking_date: selectedDate?.toISOString(),
        booking_time: selectedTime,
      },
      callback: paymentCallback, // Pass the function reference
      onClose: paymentOnClose,   // Pass the function reference
    });

    handler.openIframe();
  } catch (error: any) {
    console.error("Paystack error:", error);
    alert(`Payment error: ${error.message || "Unable to process payment"}`);
    setIsProcessing(false);
  }
};

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
      setSelectedTime(null)
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

  const handleSubmitBooking = () => {
    if (!selectedConsultation || !selectedDate || !selectedTime) {
      alert("Please complete all booking details")
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields")
      return
    }

    // Log booking data (optional)
    console.log({
      consultation: selectedConsultation,
      date: selectedDate,
      time: selectedTime,
      userDetails: formData,
    })

    // Proceed to Paystack payment
    payWithPaystack()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
      />

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
            {/* ... (keep all your existing JSX for steps 1-3 exactly as is) ... */}
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
                        required
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
                        required
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
                        required
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
                        required
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

                  {/* Payment Options */}
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Payment Method
                    </h3>
                    <div className="space-y-6">
                      <div className="p-4 border border-primary/30 rounded-xl bg-primary/5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
                            PS
                          </div>
                          <span className="font-semibold">Paystack</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Secure payment via Paystack. You'll be redirected to a secure payment page.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>Your payment is secured with 256-bit SSL encryption</span>
                      </div>

                      <Button
                        onClick={handleSubmitBooking}
                        disabled={isProcessing}
                        className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-xl"
                      >
                        {isProcessing ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <>
                            Pay ${selectedConsultation?.price} USD
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By proceeding, you agree to our Terms of Service and Privacy Policy
                      </p>
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
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmitBooking}
                  disabled={isProcessing}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  {isProcessing ? "Processing..." : "Complete Payment"}
                  {!isProcessing && <ArrowRight className="w-5 h-5 ml-2" />}
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