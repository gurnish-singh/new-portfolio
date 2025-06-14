// components/AppDrawer.tsx
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/nightMode/mode-toggle.tsx';
import { Link, useLocation } from 'react-router-dom';
const AppDrawer = () => {
  const location = useLocation();
  return (
    <header className="w-full fixed top-0 left-0 flex items-center px-4 py-2 shadow-xl z-50 bg-background">
      <div className="flex items-center gap-2">
        <Link to={'/'}>
          <div className="text-2xl sm:text-4xl font-bold whitespace-nowrap">
            Gurnish Singh
          </div>
        </Link>
      </div>
      <div className=" flex items-center ml-auto">
        {location.pathname === '/' && (
          <>
            <nav className="hidden lg:flex gap-6 text-lg font-medium ml-auto">
              <a href="#education" className="hover:underline">
                Education
              </a>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </nav>
            <div className="lg:hidden ml-auto">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="flex flex-col gap-4 mt-10 ml-4 text-lg font-medium">
                    <a href="#education" className="hover:underline">
                      Education
                    </a>
                    <a href="#skills" className="hover:underline">
                      Skills
                    </a>
                    <a href="#experience" className="hover:underline">
                      Experience
                    </a>
                    <a href="#blog" className="hover:underline">
                      Blog
                    </a>
                    <a href="#contact" className="hover:underline">
                      Contact
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </>
        )}
      </div>
      <ModeToggle />
    </header>
  );
};

export default AppDrawer;
