import { useState } from 'react'

const models = [
  {
    name: 'Perceptron',
    description:
      'The simplest neural unit: weighted inputs, bias, and a step or activation output.',
    difficulty: 'Beginner',
    difficultyClass:
      'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80',
    icon: 'blur_on',
  },
  {
    name: 'Multi-Layer Perceptron (MLP)',
    description:
      'Stacked layers of neurons that learn non-linear decision boundaries.',
    difficulty: 'Beginner',
    difficultyClass:
      'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80',
    icon: 'account_tree',
  },
  {
    name: 'Convolutional Neural Network (CNN)',
    description:
      'Spatial filters and pooling for images, video, and grid-like data.',
    difficulty: 'Intermediate',
    difficultyClass:
      'bg-amber-50 text-amber-800 ring-1 ring-amber-200/80',
    icon: 'grid_view',
  },
  {
    name: 'Recurrent Neural Network (RNN)',
    description:
      'Hidden state over sequences—ideal for time series and ordered inputs.',
    difficulty: 'Intermediate',
    difficultyClass:
      'bg-amber-50 text-amber-800 ring-1 ring-amber-200/80',
    icon: 'repeat',
  },
  {
    name: 'Long Short-Term Memory (LSTM)',
    description:
      'Gated memory cells that capture long-range dependencies in sequences.',
    difficulty: 'Advanced',
    difficultyClass: 'bg-rose-50 text-rose-700 ring-1 ring-rose-200/80',
    icon: 'memory',
  },
  {
    name: 'Hopfield Network',
    description:
      'Associative memory via energy minimization and recurrent symmetric weights.',
    difficulty: 'Advanced',
    difficultyClass: 'bg-rose-50 text-rose-700 ring-1 ring-rose-200/80',
    icon: 'hub',
  },
]

const pathSteps = [
  { step: 1, title: 'Basics', detail: 'Neurons, weights, and activations' },
  {
    step: 2,
    title: 'Forward Propagation',
    detail: 'How signals flow layer to layer',
  },
  {
    step: 3,
    title: 'Backpropagation',
    detail: 'Gradients and learning from error',
  },
  { step: 4, title: 'Advanced Models', detail: 'CNNs, RNNs, and beyond' },
]

const fontStyle = { fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }

function MainNav({ active, onNavigate, searchPlaceholder }) {
  const tabClass = (view) =>
    active === view
      ? 'border-b-2 border-purple-600 pb-0.5 text-slate-700'
      : 'transition-colors hover:text-slate-700'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 shadow-sm shadow-slate-200/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-3.5 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="shrink-0 text-left text-xl font-bold tracking-tight"
          >
            <span className="text-slate-900">Learno</span>
            <span className="text-purple-600">box</span>
          </button>

          <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500 md:order-none md:flex-1 md:justify-center lg:w-auto">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={tabClass('home')}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => onNavigate('learn')}
              className={tabClass('learn')}
            >
              Learn
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <label className="relative hidden lg:block">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </span>
              <input
                type="search"
                placeholder={searchPlaceholder}
                className="w-56 rounded-full border border-slate-200/90 bg-slate-100/80 py-2 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-inner shadow-white/50 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-500/20"
              />
            </label>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-500 shadow-sm transition hover:border-slate-300 hover:shadow-md"
              aria-label="Profile"
            >
              <span className="material-symbols-outlined text-[22px]">
                person
              </span>
            </button>
          </div>
        </div>

        <label className="relative mt-3 lg:hidden">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
            <span className="material-symbols-outlined text-[20px]">
              search
            </span>
          </span>
          <input
            type="search"
            placeholder={searchPlaceholder}
            className="w-full rounded-full border border-slate-200/90 bg-slate-100/80 py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-inner outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-500/20"
          />
        </label>
      </div>
    </header>
  )
}

function AppFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-bold text-slate-900">Learnobox</p>
          <p className="mt-1 text-xs leading-relaxed">
            © 2024 Learnobox Archive. Designed for intellectual breathing room.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <a href="#" className="hover:text-slate-700">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-700">
            Terms
          </a>
          <a href="#" className="hover:text-slate-700">
            Support
          </a>
          <a href="#" className="hover:text-slate-700">
            Documentation
          </a>
        </nav>
      </div>
    </footer>
  )
}

function HomeView({ onNavigate }) {
  return (
    <div
      className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased"
      style={fontStyle}
    >
      <MainNav
        active="home"
        onNavigate={onNavigate}
        searchPlaceholder="Search..."
      />

      <main className="mx-auto max-w-6xl flex-1 px-6 pb-16 pt-12 lg:px-8 lg:pt-16">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600"
            aria-hidden
          />
          <span>NEW: VISUALIZING TRANSFORMERS</span>
        </div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Learnobox
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-slate-600 md:text-xl">
          Learn and Visualize AI Models Interactively
        </p>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <article className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-md shadow-slate-200/50 ring-1 ring-slate-100">
            <span
              className="material-symbols-outlined pointer-events-none absolute -right-2 -top-2 text-[140px] leading-none text-slate-100"
              aria-hidden
            >
              bookmark
            </span>
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-purple-600">
                <span className="material-symbols-outlined text-[26px]">
                  menu_book
                </span>
              </div>
              <h2 className="mb-3 text-xl font-bold text-slate-900">
                Learn Neural Networks
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-slate-600">
                Deep dive into activation functions and architectures. Master the
                mathematics behind backpropagation through interactive
                visualizations.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('learn')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-600/25 transition-opacity hover:opacity-95"
              >
                Get Started
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-md shadow-slate-200/50 ring-1 ring-slate-100">
            <span
              className="material-symbols-outlined pointer-events-none absolute -right-2 -top-2 text-[140px] leading-none text-slate-100"
              aria-hidden
            >
              terminal
            </span>
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-purple-600">
                <span className="material-symbols-outlined text-[26px]">
                  hub
                </span>
              </div>
              <h2 className="mb-3 text-xl font-bold text-slate-900">
                Explore architectures
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-slate-600">
                Browse perceptrons, CNNs, RNNs, and more—structured lessons and
                visual highlights in one place.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('learn')}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-600/25 transition-opacity hover:opacity-95"
              >
                View topics
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-5 rounded-2xl bg-slate-100/90 p-6 ring-1 ring-slate-200/60 sm:flex-row sm:items-stretch md:p-7">
            <div
              className="relative h-36 w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 sm:h-auto sm:w-44"
              aria-hidden
            >
              <div className="absolute inset-0 opacity-80">
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/30 blur-3xl" />
                <div className="absolute bottom-2 right-2 h-20 w-20 rounded-full bg-indigo-400/20 blur-2xl" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.35),transparent_50%)]" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Real-time Inference
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-slate-600">
                Our engine uses WebGL to render million-parameter models directly
                in your browser at 60fps.
              </p>
              <a
                href="#"
                className="w-fit text-sm font-medium text-purple-600 underline decoration-purple-600 underline-offset-2 hover:text-purple-700"
              >
                Read Technical Specs
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-100/90 px-6 py-10 ring-1 ring-slate-200/60 md:py-12">
            <p className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              5+
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              PRE-TRAINED MODELS
            </p>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}

function LearnView({ onNavigate }) {
  return (
    <div
      className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased"
      style={fontStyle}
    >
      <MainNav
        active="learn"
        onNavigate={onNavigate}
        searchPlaceholder="Search concept..."
      />

      <main className="mx-auto max-w-6xl flex-1 px-6 pb-20 pt-10 lg:px-8 lg:pt-14">
        <header className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-gradient-to-r from-purple-50 to-indigo-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-purple-700 shadow-sm">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600"
              aria-hidden
            />
            Beginner Friendly
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Learn Neural Networks
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            Understand models visually and interactively
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)] lg:items-start lg:gap-12">
          <div className="min-w-0 space-y-12">
            <section aria-labelledby="models-heading">
              <h2 id="models-heading" className="sr-only">
                Model topics
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {models.map((m) => (
                  <article
                    key={m.name}
                    className="group flex flex-col rounded-xl border border-slate-100/90 bg-white p-6 shadow-md shadow-slate-200/40 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-purple-600 transition group-hover:bg-purple-50">
                        <span className="material-symbols-outlined text-[24px]">
                          {m.icon}
                        </span>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${m.difficultyClass}`}
                      >
                        {m.difficulty}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900">
                      {m.name}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                      {m.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        if (m.name === 'Perceptron') onNavigate('perceptron');
                        if (m.name === 'Long Short-Term Memory (LSTM)') onNavigate('lstm');
                        if (m.name === 'Convolutional Neural Network (CNN)') onNavigate('cnn');
                        if (m.name === 'Multi-Layer Perceptron (MLP)') onNavigate('mlp');
                        if (m.name === 'Hopfield Network') onNavigate('hopfield');
                      }}
                      className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                      Start Learning
                      <span className="material-symbols-outlined text-[18px]">
                        school
                      </span>
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="visual-heading"
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 md:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1">
                  <h2
                    id="visual-heading"
                    className="mb-3 text-xl font-bold text-slate-900 md:text-2xl"
                  >
                    See how data flows through neurons in real-time
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
                    Open the visualizer to watch activations, weights, and
                    gradients update as you step through a network—no install
                    required.
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/40"
                  >
                    Launch Visualizer
                    <span className="material-symbols-outlined text-[20px]">
                      play_circle
                    </span>
                  </button>
                </div>
                <div
                  className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 shadow-inner lg:h-56 lg:w-[320px]"
                  aria-hidden
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(129,140,248,0.45),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.35),transparent_45%)]" />
                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-5xl text-purple-200/90">
                      hub
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/40 ring-1 ring-slate-100">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-purple-600">
                Learning path
              </p>
              <h3 className="mb-5 text-lg font-bold text-slate-900">
                Your roadmap
              </h3>
              <ol className="space-y-0">
                {pathSteps.map((s, i) => (
                  <li key={s.step} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < pathSteps.length - 1 ? (
                      <div
                        className="absolute left-[15px] top-8 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-purple-200 to-slate-200"
                        aria-hidden
                      />
                    ) : null}
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-xs font-bold text-white shadow-md shadow-purple-500/30">
                      {s.step}
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-semibold text-slate-900">{s.title}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}

function PerceptronView({ onNavigate }) {
  const [lr, setLr] = useState(0.1);
  const [epochs, setEpochs] = useState(10);
  const [w1, setW1] = useState(0.0);
  const [w2, setW2] = useState(0.0);
  const [b, setBias] = useState(0.0);
  
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const [testHours, setTestHours] = useState('');
  const [testAttendance, setTestAttendance] = useState('');
  const [testResult, setTestResult] = useState(null);

  const handleManualPredict = () => {
    if (!results) return;
    const h = parseFloat(testHours);
    const a = parseFloat(testAttendance);
    if (isNaN(h) || isNaN(a)) return;

    // BUG FIX EXPLANATION:
    // The backend applies Min-Max feature scaling before training, meaning 
    // the returned final_weights belong to a strictly normalized [0,1] space. 
    // Feeding raw values (like Attendance=50) into scaled weights causes the 
    // intermediate 'y' variable to skew heavily positive, falsely resulting in PASS.
    // Solution: Mirror the backend's Min-Max scaling step onto these inputs.

    const isDefault = data.length <= 6;
    const h_arr = data.map(r => r[0]);
    const a_arr = data.map(r => r[1]);
    
    // Match Python generator bounds or dynamic CSV bounds
    const minH = isDefault ? 0 : Math.min(...h_arr);
    const maxH = isDefault ? 10 : Math.max(...h_arr);
    const minA = isDefault ? 50 : Math.min(...a_arr);
    const maxA = isDefault ? 100 : Math.max(...a_arr);
    
    const diffH = maxH - minH || 1;
    const diffA = maxA - minA || 1;

    // Apply normalization to test inputs
    const x1 = (h - minH) / diffH;
    const x2 = (a - minA) / diffA;

    // 1. Verify perceptron equation: y = w1*x1 + w2*x2 + b
    const w1 = results.final_weights[0];
    const w2 = results.final_weights[1];
    const b = results.final_bias;
    const y = (w1 * x1) + (w2 * x2) + b;
    
    // 3. Print intermediate value (y) before activation for debugging
    console.log(`[Debug] Raw Inputs: Hours=${h}, Attendance=${a}`);
    console.log(`[Debug] Scaled Inputs: x1=${x1.toFixed(3)}, x2=${x2.toFixed(3)}`);
    console.log(`[Debug] Pre-activation intermediate value (y):`, y);

    // 2. Ensure correct step activation function
    // If y >= 0 -> PASS (1), If y < 0 -> FAIL (0)
    setTestResult(y >= 0 ? 1 : 0);
  };

  const initialData = [
    [2, 50, 0],
    [3, 60, 0],
    [5, 70, 1],
    [7, 80, 1],
    [1, 40, 0],
    [8, 90, 1],
  ];

  const [data, setData] = useState(initialData);

  const handleTrain = async () => {
    setLoading(true);
    setTestResult(null);
    try {
      const res = await fetch("http://localhost:8000/perceptron/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: data,
          learning_rate: parseFloat(lr),
          epochs: parseInt(epochs),
          weights: [parseFloat(w1), parseFloat(w2)],
          bias: parseFloat(b)
        })
      });
      const resData = await res.json();
      setResults(resData);
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8,hours,attendance,pass\n" + data.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "student_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      const lines = text.split('\n').filter(l => l.trim() !== '');
      const parsedData = [];
      for (let i = 1; i < lines.length; i++) { // skip header
        const parts = lines[i].split(',');
        if (parts.length >= 3) {
          parsedData.push([parseFloat(parts[0]), parseFloat(parts[1]), parseInt(parts[2])]);
        }
      }
      if (parsedData.length > 0) {
        setData(parsedData);
        setResults(null); 
      }
    };
    reader.readAsText(file);
  };

  const renderGraph = () => {
    if (!results || !results.loss_per_epoch || results.loss_per_epoch.length === 0) return null;
    const maxLoss = Math.max(...results.loss_per_epoch, 0.001);
    const points = results.loss_per_epoch.map((loss, idx) => {
      const x = (idx / (results.loss_per_epoch.length - 1 || 1)) * 100;
      const y = 100 - (loss / maxLoss) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polyline points={points} fill="none" stroke="#8b5cf6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  };

  const calculateAccuracy = () => {
    if (!results || !results.predictions) return 0;
    let correct = 0;
    data.forEach((row, i) => {
      if (row[2] === results.predictions[i]) correct++;
    });
    return ((correct / data.length) * 100).toFixed(1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased" style={fontStyle}>
      <MainNav active="learn" onNavigate={onNavigate} searchPlaceholder="Search..." />
      <main className="mx-auto max-w-5xl flex-1 px-6 pb-20 pt-10 lg:px-8">
        <button onClick={() => onNavigate('learn')} className="mb-6 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
          <span className="material-symbols-outlined mr-1 text-[18px]">arrow_back</span>
          Back to Models
        </button>
        <h1 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">Perceptron Learning Module</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Theory Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">1. How it Works</h2>
            <p className="mb-4 text-sm text-slate-600">
              The Perceptron is the simplest neural network. 
              It predicts an output based on weighted inputs.
            </p>
            <div className="mb-4 rounded bg-slate-50 p-4 font-mono text-sm text-slate-800 border border-slate-100">
              <p>Formula: y = step(w₁*x₁ + w₂*x₂ + b)</p>
            </div>
            <h3 className="mb-2 font-semibold text-slate-800">Student Example:</h3>
            <ul className="mb-4 list-inside list-disc text-sm text-slate-600">
              <li><strong>x₁ (Input 1):</strong> Study Hours</li>
              <li><strong>x₂ (Input 2):</strong> Attendance %</li>
              <li><strong>Output (y):</strong> 1 (Pass) or 0 (Fail)</li>
            </ul>
            <p className="text-sm text-slate-600">
              More study + attendance means a higher chance to pass!
            </p>
          </section>

          {/* Dataset Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
            <h2 className="mb-4 text-xl font-bold text-slate-900">2. Dataset</h2>
            <div className="overflow-x-auto rounded border border-slate-200 flex-1">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Study Hours</th>
                    <th className="px-4 py-2 font-semibold">Attendance</th>
                    <th className="px-4 py-2 font-semibold">Pass?</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="px-4 py-2">{row[0]}</td>
                      <td className="px-4 py-2">{row[1]}</td>
                      <td className="px-4 py-2">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${row[2] ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                          {row[2] ? 'Pass' : 'Fail'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={handleDownload} className="text-sm text-purple-600 border border-purple-200 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-lg transition font-medium">
                Download CSV
              </button>
              <label className="text-sm text-indigo-600 border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg transition font-medium cursor-pointer inline-flex items-center">
                Upload CSV
                <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
          </section>

          {/* Controls Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">3. Parameters</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Learning Rate</label>
                <input type="number" step="0.01" value={lr} onChange={e => setLr(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Epochs</label>
                <input type="number" value={epochs} onChange={e => setEpochs(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Initial w₁ (Hours)</label>
                <input type="number" step="0.1" value={w1} onChange={e => setW1(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Initial w₂ (Attend)</label>
                <input type="number" step="0.1" value={w2} onChange={e => setW2(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Initial Bias (b)</label>
                <input type="number" step="0.1" value={b} onChange={e => setBias(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
            </div>
            <button onClick={handleTrain} disabled={loading} className="mt-6 w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 font-bold text-white shadow-md hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50">
              {loading ? 'Training...' : 'Train Model'}
            </button>
          </section>

          {/* Graph Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">4. Live Epoch Graph</h2>
            {results ? (
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Epoch Loss</span>
                </div>
                <div className="mx-4 mb-4 relative h-48 border-l-2 border-b-2 border-slate-300 bg-slate-50">
                  {renderGraph()}
                  <div className="absolute top-0 -left-10 text-xs text-slate-400">{Math.max(...results.loss_per_epoch).toFixed(2)}</div>
                  <div className="absolute bottom-0 -left-6 text-xs text-slate-400">0</div>
                </div>
                
                {/* Result Section */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">Results</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-lg bg-slate-50 p-3 border border-slate-100 shadow-inner">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Final Weights</p>
                      <p className="font-mono text-slate-900">w₁: {results.final_weights[0].toFixed(3)}</p>
                      <p className="font-mono text-slate-900">w₂: {results.final_weights[1].toFixed(3)}</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-3 border border-slate-100 shadow-inner">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Final Bias</p>
                      <p className="font-mono text-slate-900">{results.final_bias.toFixed(3)}</p>
                    </div>
                    <div className="col-span-2 rounded-lg bg-purple-50 p-4 border border-purple-100 flex items-center justify-between shadow-inner">
                      <div>
                        <p className="text-purple-600 text-xs font-semibold uppercase tracking-wider mb-1">Accuracy</p>
                        <p className="text-3xl font-bold text-purple-900">{calculateAccuracy()}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-purple-600 text-xs font-semibold uppercase tracking-wider mb-1">Predictions</p>
                        <p className="text-sm text-purple-900 font-medium">[{results.predictions.slice(0, 4).join(', ')}{results.predictions.length > 4 ? ', ...' : ''}]</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Test Your Input Section */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">Test Your Input</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Study Hours</label>
                      <input type="number" step="0.1" value={testHours} onChange={e => setTestHours(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Attendance</label>
                      <input type="number" step="0.1" value={testAttendance} onChange={e => setTestAttendance(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
                    </div>
                  </div>
                  <button onClick={handleManualPredict} className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 font-bold text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition">
                    Predict Result
                  </button>
                  {testResult !== null && (
                    <div className={`mt-4 rounded-lg p-3 text-center border font-bold text-sm ${testResult === 1 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>
                      Result: {testResult === 1 ? 'PASS ✅' : 'FAIL ❌'}
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">
                Click Train to start learning
              </div>
            )}
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

function LSTMView({ onNavigate }) {
  const [mode, setMode] = useState("number");
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [lr, setLr] = useState(0.01);
  const [epochs, setEpochs] = useState(20);
  const [hiddenUnits, setHiddenUnits] = useState(16);
  const [seqLen, setSeqLen] = useState(3);
  
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const sampleNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sampleText = ["i", "love", "deep", "learning", "and", "ai", "so", "much"];

  const handleTrain = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/lstm/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sequence: data,
          mode: mode,
          learning_rate: parseFloat(lr),
          epochs: parseInt(epochs),
          hidden_units: parseInt(hiddenUnits),
          sequence_length: parseInt(seqLen)
        })
      });
      const resData = await res.json();
      if(resData.error) {
        alert(resData.error);
      } else {
        setResults(resData);
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      if (mode === "number") {
        const parsed = text.split(/[,\n ]+/).map(x => parseFloat(x)).filter(x => !isNaN(x));
        setData(parsed);
      } else {
        const parsed = text.split(/[,\n ]+/).map(x => x.trim().toLowerCase()).filter(x => x !== '');
        setData(parsed);
      }
      setResults(null); 
    };
    reader.readAsText(file);
  };

  const renderGraph = () => {
    if (!results || !results.loss_per_epoch || results.loss_per_epoch.length === 0) return null;
    const maxLoss = Math.max(...results.loss_per_epoch, 0.001);
    const points = results.loss_per_epoch.map((loss, idx) => {
      const x = (idx / (results.loss_per_epoch.length - 1 || 1)) * 100;
      const y = 100 - (loss / maxLoss) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polyline points={points} fill="none" stroke="#8b5cf6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased" style={fontStyle}>
      <MainNav active="learn" onNavigate={onNavigate} searchPlaceholder="Search..." />
      <main className="mx-auto max-w-5xl flex-1 px-6 pb-20 pt-10 lg:px-8">
        <button onClick={() => onNavigate('learn')} className="mb-6 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
          <span className="material-symbols-outlined mr-1 text-[18px]">arrow_back</span>
          Back to Models
        </button>
        <h1 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">LSTM Learning Module</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Theory Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">1. How it Works</h2>
            <p className="mb-4 text-sm text-slate-600">
              LSTM is a type of neural network used for sequence data. It remembers important information and forgets unnecessary data using special gates.
            </p>
            <h3 className="mb-2 font-semibold text-slate-800">Gate Flow:</h3>
            <ul className="mb-4 list-inside list-disc text-sm text-slate-600 space-y-1">
              <li><strong>Forget Gate:</strong> decides what to forget</li>
              <li><strong>Input Gate:</strong> decides what to store</li>
              <li><strong>Output Gate:</strong> decides what to output</li>
            </ul>
            <p className="text-sm text-slate-600 border-l-2 border-purple-400 pl-3 italic">
              Basic Flow: Input → Memory Update → Output
            </p>
          </section>

          {/* Dataset Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-900">2. Sequence Data</h2>
              <div className="flex gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button onClick={() => {setMode("number"); setData(sampleNum); setResults(null);}} className={`px-3 py-1 text-xs font-bold rounded-md transition ${mode === 'number' ? 'bg-white shadow text-purple-700' : 'text-slate-500'}`}>Numeric</button>
                <button onClick={() => {setMode("text"); setData(sampleText); setResults(null);}} className={`px-3 py-1 text-xs font-bold rounded-md transition ${mode === 'text' ? 'bg-white shadow text-purple-700' : 'text-slate-500'}`}>Text</button>
              </div>
            </div>
            
            <div className="rounded border border-slate-200 bg-slate-50 p-4 text-sm font-mono flex-1 overflow-y-auto max-h-32 shadow-inner">
              {mode === 'number' ? data.join(", ") : data.join(" ")}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button 
                onClick={() => { setData(mode === 'number' ? sampleNum : sampleText); setResults(null); }} 
                className="text-sm text-purple-600 border border-purple-200 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg transition font-medium"
              >
                Load Sample
              </button>
              <label className="text-sm text-indigo-600 border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition font-medium cursor-pointer inline-flex items-center">
                Upload CSV / Text
                <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
          </section>

          {/* Controls Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">3. Parameters</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Learning Rate</label>
                <input type="number" step="0.01" value={lr} onChange={e => setLr(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Epochs</label>
                <input type="number" value={epochs} onChange={e => setEpochs(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Hidden Units</label>
                <input type="number" value={hiddenUnits} onChange={e => setHiddenUnits(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Window Size</label>
                <input type="number" value={seqLen} onChange={e => setSeqLen(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
            </div>
            <button onClick={handleTrain} disabled={loading} className="mt-6 w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 font-bold text-white shadow-md hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 transition">
              {loading ? 'Training...' : 'Train Sequence Model'}
            </button>
          </section>

          {/* Graph Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">4. Live Epoch Graph</h2>
            {results && !results.error ? (
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Epoch Loss</span>
                </div>
                <div className="mx-4 mb-4 relative h-48 border-l-2 border-b-2 border-slate-300 bg-slate-50">
                  {renderGraph()}
                  <div className="absolute top-0 -left-10 text-xs text-slate-400">{Math.max(...results.loss_per_epoch).toFixed(2)}</div>
                  <div className="absolute bottom-0 -left-6 text-xs text-slate-400">0</div>
                </div>
                
                {/* Result Section */}
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">Prediction</h3>
                  <div className="flex justify-between items-center bg-white p-4 rounded border border-emerald-100 shadow-inner">
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Next Value:</span>
                    <span className="text-2xl font-bold text-emerald-700">{results.prediction}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">
                Click Train to start learning
              </div>
            )}
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

function CNNView({ onNavigate }) {
  const [lr, setLr] = useState(0.01);
  const [epochs, setEpochs] = useState(10);
  const [filters, setFilters] = useState(8);
  const [kernelSize, setKernelSize] = useState(3);
  
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      setImagePreview(evt.target.result);
      
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 28;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        
        const imgData = ctx.getImageData(0, 0, size, size).data;
        const pixels = [];
        for (let i = 0; i < imgData.length; i += 4) {
          const r = imgData[i];
          const g = imgData[i+1];
          const b = imgData[i+2];
          const gray = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;
          pixels.push(gray);
        }
        
        setImageBase64(JSON.stringify(pixels));
        setResults(null); 
      };
      img.src = evt.target.result;
    };
    reader.readAsDataURL(file);
  };

  const loadSampleImage = () => {
    setImagePreview("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%2394a3b8'/%3E%3Ccircle cx='35' cy='45' r='5' fill='%23334155'/%3E%3Ccircle cx='65' cy='45' r='5' fill='%23334155'/%3E%3Cpath d='M 40 65 Q 50 75 60 65' stroke='%23334155' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    const pixels = Array(28*28).fill(1.0);
    for(let r=0; r<28; r++){
      for(let c=0; c<28; c++){
         if (Math.abs(r-14)<4 || Math.abs(c-14)<4) pixels[r*28+c] = 0.2;
      }
    }
    setImageBase64(JSON.stringify(pixels));
    setResults(null);
  };

  const handleTrain = async () => {
    if (!imageBase64) return alert("Please upload an image first.");
    setLoading(true);
    setResults(null);
    try {
      const payload = {
        image: imageBase64,
        learning_rate: parseFloat(lr),
        epochs: parseInt(epochs),
        filters: parseInt(filters),
        kernel_size: parseInt(kernelSize)
      };
      const res = await fetch("http://localhost:8000/cnn/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        throw new Error(`API returned HTTP ${res.status}`);
      }
      const resData = await res.json();
      if(resData.error) {
        alert("Server Error: " + resData.error);
      } else {
        setResults(resData);
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderGraph = () => {
    if (!results || !results.loss_per_epoch || results.loss_per_epoch.length === 0) return null;
    const maxLoss = Math.max(...results.loss_per_epoch, 0.001);
    const points = results.loss_per_epoch.map((loss, idx) => {
      const x = (idx / (results.loss_per_epoch.length - 1 || 1)) * 100;
      const y = 100 - (loss / maxLoss) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polyline points={points} fill="none" stroke="#f59e0b" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    ); 
  };

  const renderFeatureMaps = () => {
    if (!results || !results.feature_maps || results.feature_maps.length === 0) return null;
    const filterLabels = ["Vertical Edge", "Horizontal Edge", "Outline Structure", "Contrast Level"];
    return (
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-[12px] font-bold uppercase tracking-widest text-slate-500 text-center">Feature Maps (Filters 1-{results.feature_maps.length})</h3>
        <div className="grid grid-cols-4 gap-2">
          {results.feature_maps.map((mapArray, i) => {
            if (!Array.isArray(mapArray)) return null;
            const minV = Math.min(...mapArray);
            const maxV = Math.max(...mapArray);
            const range = maxV - minV || 1;
            return (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[11px] font-bold text-slate-700 mb-0">K-{i + 1}</span>
                <span className="text-[8px] text-slate-400 mb-2 font-mono uppercase tracking-tight text-center">{filterLabels[i] || "Filter"}</span>
                <svg viewBox="0 0 140 140" className="w-full aspect-square border border-slate-200 rounded">
                  {mapArray.map((val, j) => {
                    const row = Math.floor(j / 14);
                    const col = j % 14;
                    const normalized = (val - minV) / range;
                    // Standard visual grayscale mapping for crispness
                    const intensity = Math.floor(normalized * 255);
                    return <rect key={j} x={col * 10} y={row * 10} width="10" height="10" fill={`rgb(${intensity},${intensity},${intensity})`} />
                  })}
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased" style={fontStyle}>
      <MainNav active="learn" onNavigate={onNavigate} searchPlaceholder="Search..." />
      <main className="mx-auto max-w-5xl flex-1 px-6 pb-20 pt-10 lg:px-8">
        <button onClick={() => onNavigate('learn')} className="mb-6 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
          <span className="material-symbols-outlined mr-1 text-[18px]">arrow_back</span>
          Back to Models
        </button>
        <h1 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">CNN Learning Module</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Theory Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">1. How it Works</h2>
            <p className="mb-4 text-sm text-slate-600">
              A <strong>Convolutional Neural Network (CNN)</strong> is specifically designed for image processing. It acts like a digital eye, scanning images for patterns such as edges, shapes, and complex textures to understand what an image contains.
            </p>
            <h3 className="mb-2 font-semibold text-slate-800">CNN Workflow:</h3>
            <ul className="mb-4 list-inside list-disc text-sm text-slate-600 space-y-1">
              <li><strong>Input Image:</strong> Raw pixel data.</li>
              <li><strong>Convolution Layer:</strong> Detects distinct features via sliding filters.</li>
              <li><strong>ReLU Activation:</strong> Enhances non-linearities (makes mapping clearer).</li>
              <li><strong>Pooling Layer:</strong> Downsamples to isolate dominant features exactly.</li>
              <li><strong>Flatten & FC:</strong> Stretches the matrix into a single line to compute scores.</li>
            </ul>
            <p className="text-sm text-slate-600 border-l-2 border-amber-400 pl-3 italic">
              Example: Scanning a photo to cleanly detect if it's a "Cat" or a "Dog" based on fur textures.
            </p>
          </section>

          {/* Dataset Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
            <h2 className="mb-4 text-xl font-bold text-slate-900">2. Input Image</h2>
            
            <div className="flex-1 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-mono overflow-hidden relative">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-32 w-32 object-cover rounded shadow-md z-10" />
              ) : (
                <div className="text-slate-400 flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-4xl">image</span>
                  <span>No image selected</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button 
                onClick={loadSampleImage} 
                className="text-sm text-amber-600 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition font-medium"
              >
                Load Sample
              </button>
              <label className="text-sm text-indigo-600 border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition font-medium cursor-pointer inline-flex items-center">
                Upload Image
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
          </section>

          {/* Controls Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">3. Parameters</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Learning Rate</label>
                <input type="number" step="0.01" value={lr} onChange={e => setLr(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Epochs</label>
                <input type="number" value={epochs} onChange={e => setEpochs(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Filters</label>
                <input type="number" value={filters} onChange={e => setFilters(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Kernel Size</label>
                <input type="number" value={kernelSize} onChange={e => setKernelSize(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" />
              </div>
            </div>
            <button onClick={handleTrain} disabled={loading || (!imagePreview)} className="mt-6 w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 font-bold text-white shadow-md hover:from-amber-400 hover:to-orange-400 disabled:opacity-50 transition">
              {loading ? 'Processing Convolutions...' : 'Train Vision Model'}
            </button>
          </section>

          {/* Graph Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">4. Live Epoch Graph</h2>
            {results && !results.error ? (
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Epoch Loss</span>
                </div>
                <div className="mx-4 mb-4 relative h-48 border-l-2 border-b-2 border-slate-300 bg-slate-50">
                  {renderGraph()}
                  <div className="absolute top-0 -left-10 text-xs text-slate-400">{Math.max(...results.loss_per_epoch).toFixed(2)}</div>
                  <div className="absolute bottom-0 -left-6 text-xs text-slate-400">0</div>
                </div>
                

                
                {/* Feature Map Visualizer */}
                {renderFeatureMaps()}
                
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400 text-center px-4">
                {!imagePreview ? "Upload an image first" : "Click Train to start convolution analysis"}
              </div>
            )}
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

function MLPView({ onNavigate }) {
  const [lr, setLr] = useState(0.01);
  const [epochs, setEpochs] = useState(100);
  const [hiddenLayers, setHiddenLayers] = useState("16, 8");
  
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const [testHours, setTestHours] = useState('');
  const [testAttendance, setTestAttendance] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [testLoading, setTestLoading] = useState(false);

  const initialData = [
    [2, 50, 0],
    [3, 60, 0],
    [5, 70, 1],
    [7, 80, 1],
    [1, 40, 0],
    [8, 90, 1],
  ];

  const [data, setData] = useState(initialData);

  const handleManualPredict = async () => {
    if (!testHours || !testAttendance) return;
    setTestLoading(true);
    setTestResult(null);
    try {
      const res = await fetch("http://localhost:8000/mlp/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hours: parseFloat(testHours),
          attendance: parseFloat(testAttendance)
        })
      });
      const resData = await res.json();
      if (resData.error) {
        alert(resData.error);
      } else {
        setTestResult(resData);
      }
    } catch (err) {
      console.error(err);
      alert("Error predicting");
    } finally {
      setTestLoading(false);
    }
  };

  const handleTrain = async () => {
    setLoading(true);
    try {
      const parsedHidden = hiddenLayers.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
      const res = await fetch("http://localhost:8000/mlp/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: data,
          learning_rate: parseFloat(lr),
          epochs: parseInt(epochs),
          hidden_layers: parsedHidden.length ? parsedHidden : [16, 8]
        })
      });
      const resData = await res.json();
      if(resData.error) {
        alert(resData.error);
      } else {
        setResults(resData);
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8,hours,attendance,pass\n" + data.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "mlp_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      const lines = text.split('\n').filter(l => l.trim() !== '');
      const parsedData = [];
      for (let i = 1; i < lines.length; i++) { // skip header
        const parts = lines[i].split(',');
        if (parts.length >= 3) {
          parsedData.push([parseFloat(parts[0]), parseFloat(parts[1]), parseInt(parts[2])]);
        }
      }
      if (parsedData.length > 0) {
        setData(parsedData);
        setResults(null); 
      }
    };
    reader.readAsText(file);
  };

  const renderGraph = () => {
    if (!results || !results.loss_per_epoch || results.loss_per_epoch.length === 0) return null;
    const maxLoss = Math.max(...results.loss_per_epoch, 0.001);
    const points = results.loss_per_epoch.map((loss, idx) => {
      const x = (idx / (results.loss_per_epoch.length - 1 || 1)) * 100;
      const y = 100 - (loss / maxLoss) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polyline points={points} fill="none" stroke="#8b5cf6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  };

  const fontStyle = { fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased" style={fontStyle}>
      <MainNav active="learn" onNavigate={onNavigate} searchPlaceholder="Search..." />
      <main className="mx-auto max-w-5xl flex-1 px-6 pb-20 pt-10 lg:px-8">
        <button onClick={() => onNavigate('learn')} className="mb-6 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
          <span className="material-symbols-outlined mr-1 text-[18px]">arrow_back</span>
          Back to Models
        </button>
        <h1 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">Multi-Layer Perceptron (MLP) Learning Module</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Theory Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">1. How it Works (Theory)</h2>
            <p className="mb-4 text-sm text-slate-600">
              <strong>What is an MLP?</strong> A neural network with multiple layers (Input, Hidden, Output). Unlike a simple perceptron, it learns complex, non-linear patterns.
            </p>
            <h3 className="mb-2 font-semibold text-slate-800">Workflow:</h3>
            <ul className="mb-4 list-inside list-disc text-sm text-slate-600 space-y-1">
              <li><strong>1. Input Layer:</strong> Takes data (Hours, Attendance).</li>
              <li><strong>2. Hidden Layers:</strong> Neurons that discover hidden patterns.</li>
              <li><strong>3. Activation (ReLU/Sigmoid):</strong> Adds non-linearity to learn complex rules.</li>
              <li><strong>4. Output Layer:</strong> Gives prediction (Pass/Fail).</li>
              <li><strong>5. Loss & Backprop:</strong> Computes error and updates weights to improve.</li>
            </ul>
          </section>

          {/* Dataset Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
            <h2 className="mb-4 text-xl font-bold text-slate-900">2. Sample Dataset</h2>
            <div className="overflow-y-auto max-h-48 rounded border border-slate-200 flex-1">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-700 sticky top-0">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Study Hours</th>
                    <th className="px-4 py-2 font-semibold">Attendance</th>
                    <th className="px-4 py-2 font-semibold">Pass?</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="px-4 py-2">{row[0]}</td>
                      <td className="px-4 py-2">{row[1]}</td>
                      <td className="px-4 py-2">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${row[2] ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                          {row[2] ? 'Pass' : 'Fail'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={handleDownload} className="text-sm text-purple-600 border border-purple-200 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-lg transition font-medium">
                Download CSV
              </button>
              <label className="text-sm text-indigo-600 border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg transition font-medium cursor-pointer inline-flex items-center">
                Upload CSV
                <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
          </section>

          {/* Controls Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">3. Parameters</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Learning Rate</label>
                <input type="number" step="0.01" value={lr} onChange={e => setLr(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Epochs</label>
                <input type="number" value={epochs} onChange={e => setEpochs(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Hidden Layers (comma separated neurons)</label>
                <input type="text" value={hiddenLayers} onChange={e => setHiddenLayers(e.target.value)} placeholder="e.g. 16, 8" className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
              </div>
            </div>
            <button onClick={handleTrain} disabled={loading} className="mt-6 w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 font-bold text-white shadow-md hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 transition">
              {loading ? 'Training...' : 'Train MLP Model'}
            </button>
          </section>

          {/* Graph & Results Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">4. Live Epoch Graph & Output</h2>
            {results && !results.error ? (
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Epoch Loss</span>
                  <span className="font-mono text-xs">{results.loss_per_epoch[results.loss_per_epoch.length-1]?.toFixed(4)} final</span>
                </div>
                <div className="mx-4 mb-4 relative h-48 border-l-2 border-b-2 border-slate-300 bg-slate-50">
                  {renderGraph()}
                  <div className="absolute top-0 -left-10 text-xs text-slate-400">{Math.max(...results.loss_per_epoch).toFixed(2)}</div>
                  <div className="absolute bottom-0 -left-6 text-xs text-slate-400">0</div>
                </div>
                
                {/* Result Section */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">Model Output</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="rounded-lg bg-purple-50 p-4 border border-purple-100 text-center shadow-inner">
                      <p className="text-purple-600 text-xs font-semibold uppercase tracking-wider mb-1">Train Accuracy</p>
                      <p className="text-2xl font-bold text-purple-900">{results.train_accuracy.toFixed(1)}%</p>
                    </div>
                    <div className="rounded-lg bg-indigo-50 p-4 border border-indigo-100 text-center shadow-inner">
                      <p className="text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">Test Accuracy</p>
                      <p className="text-2xl font-bold text-indigo-900">{results.test_accuracy.toFixed(1)}%</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3 border border-slate-100 shadow-inner">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Predictions (First few)</p>
                    <p className="font-mono text-slate-900 break-all text-xs">
                      [{results.predictions.slice(0, 10).join(', ')}{results.predictions.length > 10 ? ', ...' : ''}]
                    </p>
                  </div>
                </div>

                {/* Test Your Input Section */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-900">Test Your Input</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Study Hours</label>
                      <input type="number" step="0.1" value={testHours} onChange={e => setTestHours(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Attendance</label>
                      <input type="number" step="0.1" value={testAttendance} onChange={e => setTestAttendance(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition" />
                    </div>
                  </div>
                  <button onClick={handleManualPredict} disabled={testLoading} className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 font-bold text-white shadow-md hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 transition">
                    {testLoading ? 'Predicting...' : 'Predict Result'}
                  </button>
                  {testResult && !testResult.error && (
                    <div className={`mt-4 rounded-lg p-3 text-center border font-bold flex justify-between items-center ${testResult.prediction === 'Pass' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>
                      <span className="text-sm">Result: {testResult.prediction} {testResult.prediction === 'Pass' ? '✅' : '❌'}</span>
                      <span className="text-xs uppercase tracking-wide opacity-80">Confidence: {(testResult.confidence * 100).toFixed(1)}%</span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">
                Click Train to start learning
              </div>
            )}
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

function HopfieldView({ onNavigate }) {
  const GRID_SIZE = 10;
  const [grid, setGrid] = useState(Array(GRID_SIZE * GRID_SIZE).fill(0));
  const [recalledGrid, setRecalledGrid] = useState(null);
  const [energies, setEnergies] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleCell = (i) => {
    const newGrid = [...grid];
    newGrid[i] = newGrid[i] === 0 ? 1 : 0;
    setGrid(newGrid);
  };

  const clearCanvas = () => {
    setGrid(Array(GRID_SIZE * GRID_SIZE).fill(0));
    setRecalledGrid(null);
    setEnergies([]);
  };

  const addNoise = () => {
    const noiseLevel = 0.15;
    const newGrid = grid.map(val => Math.random() < noiseLevel ? (val === 0 ? 1 : 0) : val);
    setGrid(newGrid);
  };

  const storePatterns = async () => {
    setLoading(true);
    // Patterns map to 10x10 grids. We'll use a Square, a Cross, and a Vertical Line
    let box = Array(100).fill(0);
    for(let i=2; i<=7; i++) { box[20+i]=1; box[70+i]=1; box[i*10+2]=1; box[i*10+7]=1; }
    
    let cross = Array(100).fill(0);
    for(let i=1; i<=8; i++) { cross[i*10+i]=1; cross[i*10+(9-i)]=1; }

    let line = Array(100).fill(0);
    for(let i=1; i<=8; i++) line[i*10+5] = 1;

    try {
      const res = await fetch("http://localhost:8000/hopfield/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patterns: [
            [...Array(10)].map((_, i) => box.slice(i*10, (i+1)*10)),
            [...Array(10)].map((_, i) => cross.slice(i*10, (i+1)*10)),
            [...Array(10)].map((_, i) => line.slice(i*10, (i+1)*10))
          ]
        })
      });
      const data = await res.json();
      alert(data.message || "Patterns Stored!");
    } catch (e) {
      alert("Error storing patterns");
    } finally {
      setLoading(false);
    }
  };

  const recallPattern = async () => {
    setLoading(true);
    const inputPattern = [...Array(10)].map((_, i) => grid.slice(i*10, (i+1)*10));
    try {
      const res = await fetch("http://localhost:8000/hopfield/recall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_pattern: inputPattern })
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
        return;
      }
      setRecalledGrid(data.recalled_pattern.flat());
      setEnergies(data.energy);
    } catch (e) {
      alert("Error recalling pattern");
    } finally {
      setLoading(false);
    }
  };

  const renderGrid = (g, onClickFn) => (
    <div className="grid grid-cols-10 gap-0.5 border-2 border-slate-300 w-fit p-0.5 bg-slate-200">
      {g.map((cell, i) => (
        <div 
          key={i} 
          onClick={onClickFn ? () => onClickFn(i) : undefined}
          className={`w-6 h-6 sm:w-8 sm:h-8 ${cell === 1 ? 'bg-slate-900' : 'bg-white'} ${onClickFn ? 'cursor-pointer hover:bg-slate-300' : ''} transition-colors duration-100`}
        />
      ))}
    </div>
  );

  const renderEnergyGraph = () => {
    if (!energies || energies.length === 0) return null;
    const maxE = Math.max(...energies, 0);
    const minE = Math.min(...energies, 0);
    const range = (maxE - minE) || 1;
    
    const points = energies.map((e, idx) => {
      const x = (idx / ((energies.length - 1) || 1)) * 100;
      const y = 100 - ((e - minE) / range) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="w-full h-32 mt-4" preserveAspectRatio="none" viewBox="-5 -5 110 110">
        <polyline points={points} fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinejoin="round" />
        {energies.map((e, idx) => (
          <circle key={idx} cx={(idx / ((energies.length - 1) || 1)) * 100} cy={100 - ((e - minE) / range) * 100} r="3" fill="#8b5cf6" />
        ))}
      </svg>
    );
  };

  const fontStyle = { fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased" style={fontStyle}>
      <MainNav active="learn" onNavigate={onNavigate} searchPlaceholder="Search..." />
      <main className="mx-auto max-w-5xl flex-1 px-6 pb-20 pt-10 lg:px-8">
        <button onClick={() => onNavigate('learn')} className="mb-6 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
          <span className="material-symbols-outlined mr-1 text-[18px]">arrow_back</span>
          Back to Models
        </button>
        <h1 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">Hopfield Network Learning Module</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Theory Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-900">1. How it Works (Theory)</h2>
            <ul className="mb-4 list-inside list-disc text-sm text-slate-600 space-y-2">
              <li><strong>Memory-Based:</strong> Stores patterns (like shapes) into memory weights instead of learning a task.</li>
              <li><strong>Pattern Recovery:</strong> If given a noisy or messed up drawing, it updates step-by-step and reconstructs the closest stored shape.</li>
              <li><strong>Energy Minimization:</strong> Think of it like a ball rolling down a hill. The network lowers its "Energy" until it rests at the stable stored pattern.</li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-indigo-900 text-sm mb-1">Step 1: Save Default Memories</h3>
                <p className="text-xs text-indigo-700">Store sample patterns: Square, Cross, Vertical Line.</p>
              </div>
              <button onClick={storePatterns} disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow hover:bg-indigo-700 disabled:opacity-50 transition">
                Store Patterns
              </button>
            </div>
          </section>

          {/* Draw Input Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-900">2. Draw Pattern</h2>
              <div className="flex gap-2">
                <button onClick={addNoise} className="px-3 py-1 text-xs font-semibold rounded bg-amber-100 text-amber-700 border border-amber-200 hover:bg-amber-200 transition">
                  Add Noise
                </button>
                <button onClick={clearCanvas} className="px-3 py-1 text-xs font-semibold rounded bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 transition">
                  Clear
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {renderGrid(grid, toggleCell)}
              <p className="mt-4 text-xs text-slate-500 mb-4 tracking-wide uppercase">Click grid to draw. Corrupt a shape</p>
              
              <button onClick={recallPattern} disabled={loading} className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 font-bold text-white shadow-md hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 transition">
                {loading ? 'Recalling...' : 'Step 2: Recall / Predict'}
              </button>
            </div>
          </section>

          {/* Live Output Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-slate-900">3. Live Output</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-inner">
                <h3 className="font-bold text-slate-700 text-sm mb-4 uppercase tracking-wider">Recalled Output</h3>
                {recalledGrid ? renderGrid(recalledGrid) : <div className="h-48 flex items-center justify-center text-sm text-slate-400 border-2 border-dashed border-slate-300 w-full rounded-lg bg-white">Store patterns, draw, and click Recall</div>}
              </div>

              <div className="flex flex-col p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-inner">
                <h3 className="font-bold text-slate-700 text-sm mb-2 uppercase tracking-wider flex justify-between items-center">
                  Energy Convergence 
                  {energies.length > 0 && <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">Steps: {energies.length - 1}</span>}
                </h3>
                {energies.length > 0 ? renderEnergyGraph() : <div className="h-32 flex items-center justify-center text-sm text-slate-400 border-2 border-dashed border-slate-300 w-full rounded-lg bg-white mt-4">Waiting for recall computation...</div>}
              </div>
            </div>
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

function App() {
  const [appView, setAppView] = useState('home')

  if (appView === 'learn') {
    return <LearnView onNavigate={setAppView} />
  }
  if (appView === 'perceptron') {
    return <PerceptronView onNavigate={setAppView} />
  }
  if (appView === 'lstm') {
    return <LSTMView onNavigate={setAppView} />
  }
  if (appView === 'cnn') {
    return <CNNView onNavigate={setAppView} />
  }
  if (appView === 'mlp') {
    return <MLPView onNavigate={setAppView} />
  }
  if (appView === 'hopfield') {
    return <HopfieldView onNavigate={setAppView} />
  }

  return <HomeView onNavigate={setAppView} />
}

export default App
