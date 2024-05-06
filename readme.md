# Next Tailwind Starter

A starter template for creating Next.js projects with Tailwind CSS.

## Getting Started

Follow these instructions to set up and start using Next Tailwind Starter.

### Prerequisites

Make sure you have `pnpm` installed on your machine. If not, you can install it via npm:

```bash
npm install -g pnpm
```

### Installation with pnpm

Create a new Next.js app using `pnpm` and this starter template:

- [create-next-app with pnpm](https://nextjs.org/docs/pages/api-reference/create-next-app)

```bash
# method 1
pnpm create next-app

# method 2
pnpm create next-app my-app --template next-tailwind-starter
```

During the setup process, you'll be prompted to configure various options:

- **Project Name**: Enter the name of your project. `… my-app`
- **TypeScript**: Choose whether to use TypeScript or not. `… Yes`
- **ESLint**: Decide if you want to use ESLint for code linting. `… Yes`
- **Tailwind CSS**: Opt to include Tailwind CSS in your project. `… Yes`
- **src Directory**: Choose whether to use a `src/` directory. `… Yes`
- **App Router**: Decide if you want to use an app router (recommended). `… Yes`
- **Default Import Alias**: Choose whether to customize the default import alias. `… No`

### Usage

Once the installation is complete, navigate into your project directory and start the development server:

```bash
cd my-app
pnpm dev
```

Your Next.js app with Tailwind CSS is now up and running!
