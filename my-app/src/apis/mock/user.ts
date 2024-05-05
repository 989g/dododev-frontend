export const users: any[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St.',
      city: 'Anytown',
      zipCode: '12345',
      country: 'USA',
    },
    company: {
      id: 1,
      name: 'Factory 1',
      address: '123 Main St.',
      manager: {
        name: 'John Smith',
        position: 'Factory Manager',
        email: 'john.smith@example.com',
        phoneNumber: '555-123-4567',
      },
      production: {
        products: ['Widgets', 'Gadgets'],
        productionCapacity: '1000 units per day',
        specialization: 'High precision manufacturing',
      },
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    address: {
      street: '456 Elm St.',
      city: 'Smallville',
      zipCode: '54321',
      country: 'USA',
    },
    company: {
      id: 2,
      name: 'Factory 2',
      address: '456 Elm St.',
      manager: {
        name: 'Jane Doe',
        position: 'Operations Director',
        email: 'jane.doe@example.com',
        phoneNumber: '555-987-6543',
      },
      production: {
        products: ['Thingamajigs', 'Doodads'],
        productionCapacity: '1500 units per day',
        specialization: 'Customizable products',
      },
    },
  },
];
