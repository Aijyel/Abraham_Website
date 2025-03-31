import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mb-10">
          <div className="flex justify-center mb-8">
            <div className="rounded-full overflow-hidden border-4 border-starry-gold/20 w-48 h-48">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=faces&cs=tinysrgb&fit=crop&h=300&w=300" 
                  alt="Jia Lyell C. Abraham" 
                  className="object-cover" 
                />
                <AvatarFallback className="bg-gradient-to-br from-starry-blue to-starry-navy text-5xl font-serif text-starry-gold">
                  JA
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-starry-gold to-starry-yellow bg-clip-text text-transparent">
            Jia Lyell C. Abraham
          </h1>
          <h2 className="text-xl md:text-2xl text-starry-light/90 mb-8">
            IT Student & Aspiring Developer
          </h2>
          <p className="text-lg md:text-xl text-starry-light/80 max-w-2xl mx-auto mb-10">
            Welcome to my digital portfolio. Explore my journey through technology, 
            coding, and creative problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-starry-gold text-starry-navy hover:bg-starry-yellow">
              <Link to="/profile">
                View My Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-starry-gold text-starry-gold hover:bg-starry-blue/20">
              <Link to="/about">
                About Me
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="content-card p-8 transform transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-starry-gold mb-4">Academic Journey</h3>
            <p className="text-starry-light/80 mb-4">
              Currently pursuing a degree in Information Technology with a focus on web development and software engineering.
            </p>
            <Link to="/profile" className="text-starry-gold hover:underline inline-flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="content-card p-8 transform transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-starry-gold mb-4">Technical Skills</h3>
            <p className="text-starry-light/80 mb-4">
              Proficient in various programming languages, frameworks, and tools essential for modern software development.
            </p>
            <Link to="/profile" className="text-starry-gold hover:underline inline-flex items-center">
              See my skills <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="content-card p-8 transform transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-starry-gold mb-4">Personal Interests</h3>
            <p className="text-starry-light/80 mb-4">
              Beyond coding, I enjoy a variety of hobbies that keep me balanced and inspire my creative thinking.
            </p>
            <Link to="/hobbies" className="text-starry-gold hover:underline inline-flex items-center">
              Discover more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
