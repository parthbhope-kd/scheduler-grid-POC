import React from 'react'

const FrappeGantt = () => {
    const tasks = [
        {
          id: 'Task 1',
          name: 'Redesign website',
          start: '2016-12-28',
          end: '2016-12-31',
          progress: 20,
          dependencies: 'Task 2, Task 3'
        },
        
      ]
      // const gantt = new Gantt("#gantt", tasks);
  return (
    <div>FrappeGantt
        <svg id="gantt"></svg>
    </div>
  )
}

export default FrappeGantt