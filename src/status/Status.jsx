const StatusComponent = () => {
    return (
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap justify-center">
          {/* Status Item 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex flex-col items-center">
          <svg class="h-20 w-20 text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" /></svg>
            <p className="text-4xl font-bold">250+</p>
            <p className="text-gray-500">Students Covered</p>
          </div>
  
          {/* Status Item 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex flex-col items-center">
          <svg class="h-20 w-20 text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
</svg>

            <p className="text-4xl font-bold">500+</p>
            <p className="text-gray-500">Books Distributed</p>
          </div>
  
          {/* Status Item 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex flex-col items-center">
          <svg class="h-20 w-20 text-blue-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />  <line x1="6" y1="21" x2="6" y2="12" />  <line x1="18" y1="21" x2="18" y2="12" />  <path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" /></svg>
            <p className="text-4xl font-bold">10+</p>
            <p className="text-gray-500">Villages Covered</p>
          </div>
  
          {/* Status Item 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex flex-col items-center">
          <svg class="h-20 w-20 text-blue-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
</svg>

            <p className="text-4xl font-bold">20+</p>
            <p className="text-gray-500">Weekly Library Activities</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatusComponent;
  