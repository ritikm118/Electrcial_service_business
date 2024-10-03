'use client'; 
import React, { useState } from 'react';
import { Phone, Zap, Shield, Star, Home, Building2, Video, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
 
import { motion } from "framer-motion"; // for animations

 
const testimonials = [
  
  { 
    name: 'John Doe', 
    feedback: '   Amazing service! The electrician arrived on time and fixed my issue quickly.  ' 
  },
  { name: 'John Doe', feedback: '  Amazing service  The electrician arrived on time and fixed my issue quickly   ' },
  { name: 'Jane Smith', feedback: 'Very professional and knowledgeable staff. Highly recommend ' },
  { name: 'Raj Patel', feedback: '  Quick and efficient service. They installed new wiring in my home perfectly. ' },
];

const faqItems = [
  { question: 'How quickly can I book an electrician?', answer: 'You can book an electrician instantly, and we&apos;ll send someone at your preferred time.' },
  { question: 'Do you offer emergency services?', answer: 'Yes, we have a dedicated emergency hotline for urgent electrical issues.' },
  { question: 'Are your electricians certified?', answer: 'All our electricians are licensed and certified to handle residential and commercial electrical tasks.' },
];

const workSteps = [
  { step: '1. Book Your Service', description: 'Choose the service you need and select a time that works for you.' },
  { step: '2. Electrician Arrives', description: 'A certified electrician will arrive at your location at the scheduled time.' },
  { step: '3. Problem Fixed', description: 'The electrician will solve your issue, ensuring everything is safe and functional.' },
  { step: '4. Payment & Feedback', description: 'Make the payment and provide feedback on our service.' },
];

const ElectricalServiceWebsite = () => {
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(false);
  // const [showBookingModal, setShowBookingModal] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
   
  // const [problemDescription, setProblemDescription] = useState('');
   
  
  const [searchQuery, setSearchQuery] = useState(''); // For search functionality
  const [userNameForCall, setUserNameForCall] = useState('');
  const [problemDescriptionForCall, setProblemDescriptionForCall] = useState('');
  
  const residentialServices = [
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: 'AC Repair & Installation', price: '₹999', description: 'Expert AC services to keep you cool' },
    { icon: <Home className="w-6 h-6 text-blue-500" />, title: 'Home Wiring & Rewiring', price: '₹1499', description: 'Upgrade your home&apos;s electrical system' },
    { icon: <Star className="w-6 h-6 text-green-500" />, title: 'Appliance Repair', price: '₹799', description: 'Fix all your electrical appliances' },
    { icon: <Zap className="w-6 h-6 text-purple-500" />, title: 'Smart Lighting Solutions', price: '₹1299', description: 'Modernize your home lighting' },
    { icon: <Shield className="w-6 h-6 text-red-500" />, title: 'Electrical Safety Audit', price: '₹699', description: 'Ensure your home is electrically safe' },
  ];
  

  const commercialServices = [
    { icon: <Building2 className="w-6 h-6 text-blue-500" />, title: 'Commercial Wiring', price: '₹2999', description: 'Comprehensive wiring for businesses' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: 'Industrial Equipment Setup', price: '₹4999', description: 'Expert setup of industrial electrical systems' },
    { icon: <Star className="w-6 h-6 text-green-500" />, title: 'Energy Efficiency Solutions', price: '₹1999', description: 'Optimize your energy consumption' },
    { icon: <Shield className="w-6 h-6 text-red-500" />, title: 'Power Backup Systems', price: '₹3999', description: 'Ensure uninterrupted power supply' },
  ];

  const handleVideoSupport = () => {
    setShowVideoCall(true);
  };

  const handleBooking = ( ) => {
  
    window.location.href ='https://form.jotform.com/242743424234452'
  };
  const handleStartVideoCall = () => {
    if (userNameForCall && problemDescriptionForCall) {
      // Construct the WhatsApp URL with pre-filled message
      const whatsappMessage = `Hello, my name is ${encodeURIComponent(userNameForCall)}. I am experiencing the following issue: ${encodeURIComponent(problemDescriptionForCall)}. Can we start a video call to resolve this?`;
      const whatsappUrl = `https://wa.me/+919319512388?text=${whatsappMessage}`;
      
      // Redirect to WhatsApp
      window.location.href = whatsappUrl;
    } else {
      alert("Please fill in your name and the problem description before starting the video call.");
    }
  };
  const VideoSupportSection = () => (
    <motion.section
      className="py-16 bg-blue-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Need Instant Support?</h2>
        <p className="text-xl mb-8">
          Connect with our experienced electricians via video call for quick fixes and advice.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleVideoSupport}
          >
            <Video className="mr-2" /> Get Instant Video Support
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
  <div className="container mx-auto flex justify-between items-center flex-wrap md:flex-nowrap">
    <motion.h1
      className="text-xl md:text-2xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      P 
    </motion.h1>

    {/* Responsive Nav */}
    <nav>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
        <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        <li>
          <motion.div
            animate={showEmergencyAlert ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Button variant="secondary" onClick={() => setShowEmergencyAlert(true)}>
              Emergency Service
            </Button>
          </motion.div>
        </li>
      </ul>
    </nav>
  </div>
</header>


      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 md:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-full mx-auto text-center px-4 md:px-0">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Powering Your World, One Socket at a Time
          </motion.h2>
          <p className="text-base md:text-xl mb-8">
            Experience the brilliance of expert electrical services for your home and business
          </p>
          <motion.div
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Electrician Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-100"
              onClick={handleVideoSupport}
            >
              <Video className="mr-2" /> Get Instant Video Support
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our P ervices</h2>
          
          {/* Search Input */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="residential">Residential Services</TabsTrigger>
              <TabsTrigger value="commercial">Commercial Services</TabsTrigger>
            </TabsList>
            <TabsContent value="residential">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {residentialServices
                  .filter((service) =>
                    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    service.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((service) => (
                    <Card key={service.title}>
                    <CardHeader>
                      {service.icon}
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                    <Button onClick={() => handleBooking( )}>Book for {service.price}</Button>
                    </CardFooter>
                  </Card>
                  
                  ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="commercial">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {commercialServices
                  .filter((service) =>
                    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    service.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((service) => (
                    <Card key={service.title}>
                      <CardHeader>
                        {service.icon}
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{service.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => handleBooking( )}>Book for {service.price}</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Support Section */}
      <VideoSupportSection />

      {/* Emergency Alert */}
      <Dialog open={showEmergencyAlert} onOpenChange={setShowEmergencyAlert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Emergency Electrical Service</DialogTitle>
            <DialogDescription>
              Call our emergency hotline for urgent issues.
            </DialogDescription>
          </DialogHeader>
          <motion.div
            className="p-4"
            animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Alert variant="destructive">
              <Phone className="w-6 h-6" />
              <AlertTitle>Emergency Hotline</AlertTitle>
              <AlertDescription>
                <a href="tel:+18001234567" className="underline">+1 (800) 123-4567</a>
              </AlertDescription>
            </Alert>
          </motion.div>
          <DialogFooter>
            <Button onClick={() => setShowEmergencyAlert(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

                  

 
<Dialog open={showVideoCall} onOpenChange={setShowVideoCall}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Instant Video Support</DialogTitle>
    </DialogHeader>
    
    <div className="space-y-4">
      {/* Input fields for user's name and problem description */}
      <Label>Your Name</Label>
      <Input 
        value={userNameForCall} 
        onChange={(e) => setUserNameForCall(e.target.value)} 
        placeholder="Enter your name" 
      />
      
      <Label>Describe the Problem</Label>
      <Textarea 
        value={problemDescriptionForCall} 
        onChange={(e) => setProblemDescriptionForCall(e.target.value)} 
        placeholder="Describe your issue" 
      />
    </div>
    
    <DialogFooter>
      <Button variant="secondary" onClick={() => setShowVideoCall(false)}>Close</Button>
      <Button onClick={handleStartVideoCall}>Start Video Call</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
 {/* How We Work Section */}
 <section id="how-we-work" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workSteps.map((step) => (
              <div key={step.step} className="p-4 border rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{step.step}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        </section>
      {/* Testimonial Section */}
      <section id="testimonials" className="py-16 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-6 border rounded-lg shadow-md bg-white">
                <p className="italic">"{testimonial.feedback}"</p>
                <h3 className="text-lg font-semibold mt-4">- {testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq) => (
              <div key={faq.question} className="p-6 border rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} PowerPro Electricians. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ElectricalServiceWebsite;
