export default function PageHeader({ title }) {
  return (
    <section className="pt-36 pb-20 px-5 gradient-primary text-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-4 border-white"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border-4 border-white"></div>
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold text-white relative z-10 animate-fadeInDown">
        {title}
      </h1>
    </section>
  )
}