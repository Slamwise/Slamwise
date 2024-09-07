import { useState, useEffect } from 'react';

const projects = [
  { name: 'Twiscord', url: 'https://github.com/Slamwise/Twiscord', technologies: ['Python', 'Flask', 'SQLite'] },
];

function App() {
  const [projectDescriptions, setProjectDescriptions] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadDescriptions = async () => {
      const descriptions: Record<string, string> = {};
      for (const project of projects) {
        try {
          const response = await fetch(`/project-descriptions/${project.name}.txt`);
          if (response.ok) {
            descriptions[project.name] = await response.text();
          }
        } catch (error) {
          console.error(`Failed to load description for ${project.name}:`, error);
        }
      }
      setProjectDescriptions(descriptions);
    };

    loadDescriptions();
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-serif text-left bg-[#f8f7f2]">
      <div className="flex-grow">
        <header className="mb-10 pt-4 px-4">
          <h1 className="text-3xl font-bold mb-2 italic">Hello, my name is Sam</h1>
          <p className="text-sm">Here's some stuff I've done.</p>
        </header>
        <main className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Past Projects</h2>
          <div className="flex justify-start">
            <hr className="w-1/4 border-t-2 border-gray-800 mb-4" />
          </div>
          <ul className="list-none p-0">
            {projects.map((project, index) => (
              <li key={index} className="mb-6">
                <div className="flex flex-col">
                  <a href={project.url} className="text-blue-600 hover:underline text-lg mb-2">
                    {project.name}
                  </a>
                  {projectDescriptions[project.name] && (
                    <p className="text-sm mb-2">{projectDescriptions[project.name]}</p>
                  )}
                  <p className="text-xs text-gray-600">
                    Technologies: {project.technologies.join(', ')}
                  </p>
                </div>
                {index < projects.length - 1 && (
                  <hr className="my-4 border-gray-300 w-full" />
                )}
              </li>
            ))}
          </ul>
        </main>
      </div>
      <footer className="mt-8 py-4 text-sm text-gray-600 px-4">
        &copy; 2024 Samuel Allen. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
