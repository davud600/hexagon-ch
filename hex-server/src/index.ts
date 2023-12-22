import { PORT } from '@utils/env'

import server from './server'

// Start server
server.listen(PORT, () => {
  console.log(`Server is running, listening on PORT: ${PORT}`)
})
