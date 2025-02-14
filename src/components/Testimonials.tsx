
const testimonials = [
  {
    id: 1,
    quote: "The quality and design of these pieces are exceptional. They've become staples in my wardrobe.",
    author: "Sarah Mitchell",
    role: "Fashion Editor"
  },
  {
    id: 2,
    quote: "Minimalist perfection. Every item feels thoughtfully designed and beautifully crafted.",
    author: "James Wilson",
    role: "Creative Director"
  },
  {
    id: 3,
    quote: "These clothes have transformed my wardrobe. Timeless pieces that work for any occasion.",
    author: "Emily Zhang",
    role: "Art Curator"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <h2 className="text-3xl font-light text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm animate-fade-up"
            >
              <blockquote className="text-gray-600 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <cite className="not-italic font-medium">{testimonial.author}</cite>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
