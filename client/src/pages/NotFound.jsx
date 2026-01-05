import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ color: "#002868" }}>
          404
        </h1>
        <p className="text-2xl mb-8 text-gray-700">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for has been deleted in the name of efficiency.
        </p>
        <Button 
          className="dogegov-button"
          onClick={() => setLocation("/")}
        >
          Return to Department
        </Button>
      </div>
    </div>
  );
}
