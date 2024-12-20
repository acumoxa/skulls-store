import { Mail, MessageSquare, Phone } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
    contact: 'hello@relume.io',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
    contact: '+1 (555) 000-0000',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
    contact: '123 Sample St, Sydney NSW 2000 AU',
  },
]

export function ContactInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <method.icon className="w-12 h-12 mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <a href="#" className="text-blue-600 hover:underline">
                {method.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

