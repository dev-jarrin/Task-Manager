import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontWeight: 'bold' }}>
        <div>Task Manager</div>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '1rem' }}>
              <a href="/"style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          </li>
          <li>
              <a href="/add-task"style={{ color: '#fff', textDecoration: 'none' }}>Add Task</a>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
