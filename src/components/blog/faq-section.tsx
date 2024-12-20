'use client'

import { Truck, DollarSign, Package, RefreshCw, Settings, Phone } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const categories = [
  { icon: Truck, label: 'Shipping' },
  { icon: DollarSign, label: 'Payment' },
  { icon: Package, label: 'Products' },
  { icon: RefreshCw, label: 'Return Policy' },
  { icon: Settings, label: 'Account' },
  { icon: Phone, label: 'Contact' },
]

const faqs = [
  {
    question: "How long does it take for my package to arrive?",
    answer: (
      <>
        <p className="mb-4">For sterling silver items, your order will be delivered within 7 to 10 business days, including production and delivery, after you place an order.</p>
        <p>For sold gold items, your order will be delivered within 10 to 15 business days, including production and delivery, after you plance an order</p>
      </>
    )
  },
  {
    question: "Where is my order?",
    answer: (
      <>
        <p className="mb-4">Remeber you can query the staus of your oders any time in My orders in the My aacount section.l if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your em-mail address and order number.</p>
        <p>What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
      </>
    )
  },
  {
    question: "Can I cancel or change my Order?",
    answer: "Yes, you can change or cancel your order within the first 10 days of your order placement."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Here are few of the most frequently asked questions by our valueable customers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {categories.map((Category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border hover:border-primary transition-colors"
            >
              <Category.icon className="h-6 w-6 mb-3" />
              <span className="text-sm font-medium">{Category.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

