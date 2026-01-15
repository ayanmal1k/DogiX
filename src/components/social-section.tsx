import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function SocialSection() {
  const socialLinks = [
    {
      name: "Twitter/X",
      url: "https://twitter.com/x_dogix",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4 3H17.9L12.3 9.4L19 17.6H13.8L9.7 12.6L5 17.6H1.5L7.5 10.7L1 3H6.3L10 7.5L14.4 3ZM14.6 16H16L5.5 4.5H3.9L14.6 16Z" fill="#FDB241"/>
      </svg>,
      description: "Follow us for updates",
    },
    {
      name: "Telegram",
      url: "https://t.me/Dogi_xx",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 17.988 15.396 18.024C14.7 18.084 14.172 17.568 13.5 17.124C12.444 16.428 11.844 15.996 10.824 15.324C9.636 14.544 10.404 14.112 11.088 13.416C11.268 13.236 14.628 10.2 14.7 9.924C14.708 9.888 14.712 9.756 14.628 9.684C14.544 9.612 14.424 9.636 14.34 9.66C14.22 9.684 12.528 10.848 9.252 13.152C8.76 13.488 8.328 13.656 7.944 13.644C7.524 13.632 6.72 13.392 6.12 13.188C5.376 12.936 4.788 12.804 4.848 12.384C4.884 12.168 5.172 11.952 5.712 11.736C9.24 10.224 11.664 9.216 12.984 8.712C16.836 7.236 17.652 6.984 18.192 6.984C18.3 6.984 18.552 7.008 18.72 7.152C18.852 7.26 18.912 7.404 18.936 7.512C18.948 7.596 18.96 7.824 18.936 7.992L17.568 8.16Z" fill="#FDB241"/>
      </svg>,
      description: "Join our community chat",
    }
  ]

  return (
    <section id="social" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <ExternalLink className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-white" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.8)"}}>
              Connect With Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)"}}>
            Join Our
            <span style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00, #FFFF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255, 140, 0, 0.9))"
            }}> Community</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty drop-shadow-lg" style={{textShadow: "0 0 10px rgba(255, 140, 0, 0.6)"}}>
            Connect with the Dogix community across all platforms and stay updated.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 max-w-6xl mx-auto">
          {/* Social Cards Column */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
            {socialLinks.map((link, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/60 to-blue-950/60 border-gold/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 text-gold hover:text-gold/80 transition-colors"
                  >
                    <div className="p-4 bg-gold/10 rounded-full">
                      {link.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg mb-1 text-white drop-shadow-lg" style={{textShadow: "0 0 15px rgba(255, 140, 0, 0.8)", backgroundColor: "rgba(255, 140, 0, 0.2)", padding: "0.25rem 0.75rem", borderRadius: "0.375rem", display: "inline-block"}}>{link.name}</h3>
                      <p className="text-base text-slate-300">{link.description}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Video Column */}
          <div className="w-full md:w-1/2">
            <div className="relative group h-full flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-blue-500 to-gold rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-blue-950/80 backdrop-blur-sm border border-gold/20 w-full h-96 flex items-center justify-center">
                <video
                  src="/video 2.mp4"
                  className="w-full h-full drop-shadow-2xl rounded-xl object-cover"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-blue-500/20 to-gold/20 rounded-xl blur-xl opacity-50 animate-pulse"></div>
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-16 md:w-20 aspect-square">
              <img
                src="/new logo.png"
                alt="Dogix Logo"
                className="w-full h-full object-contain drop-shadow-gold animate-float"
              />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg" style={{textShadow: "0 0 20px rgba(255, 140, 0, 0.8)"}}>Dogix</span>
            </div>
            <p className="text-sm md:text-base text-slate-400 mt-2">Built by the community, for the community.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
