/* ======================================================================
   PORTFOLIO DATA — single source of truth
====================================================================== */
const portfolio = {
  name: "MOIZ AHMAD",
  role: "CREATIVE WEB DEVELOPER",
  contact: {
    whatsapp: "923253248839",
    email: "semoizahmad@gmail.com",
    instagram: "zenflaremoiz",
    tiktok: "zenflaremoiz",
    fiverr: "gdmoizahmad"
  }
};

const techCloud = [
  {name:"HTML5", icon:"fa-brands fa-html5"},
  {name:"CSS3", icon:"fa-brands fa-css3-alt"},
  {name:"JAVASCRIPT", icon:"fa-brands fa-js"},
  {name:"REACT", icon:"fa-brands fa-react"},
  {name:"WORDPRESS", icon:"fa-brands fa-wordpress"},
  {name:"WOOCOMMERCE", icon:"fa-brands fa-cc-visa"},
  {name:"PYTHON", icon:"fa-brands fa-python"},
  {name:"C", icon:"fa-solid fa-c"}
];

const services = [
  {title:"Modern Websites", desc:"Fast, custom-built sites focused on clarity and craft."},
  {title:"Responsive Interfaces", desc:"Layouts engineered to feel native on every screen."},
  {title:"WordPress Development", desc:"Flexible, editable sites built on solid foundations."},
  {title:"WooCommerce Stores", desc:"Commerce experiences that convert and stay easy to run."},
  {title:"React Development", desc:"Component-driven applications with real interactivity."},
  {title:"Interactive Web Experiences", desc:"Motion and detail that make a site memorable."}
];

const projects = [
  {title:"Premium Restaurant Website", tags:["Web Design","Booking","SEO"], img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop", desc:"A warm, appetite-driven site for a fine-dining restaurant, built around menu storytelling and table reservations.", features:["Animated menu presentation","Online reservation flow","Mobile-first ordering experience"], tech:"HTML · CSS · JavaScript"},
  {title:"Creative Agency Website", tags:["Branding","Motion","Portfolio"], img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop", desc:"An editorial portfolio for a design studio, using scroll-driven reveals to present case studies.", features:["Scroll-triggered case studies","Custom cursor interactions","Editorial typography system"], tech:"HTML · CSS · GSAP"},
  {title:"React E-Commerce Application", tags:["React","Cart","API"], img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop", desc:"A fashion storefront built in React with cart state, filtering, and a streamlined checkout.", features:["Component-based product catalog","Persistent cart state","Filter & search interactions"], tech:"React · JavaScript"},
  {title:"React Analytics Dashboard", tags:["React","Data Viz","Dashboard"], img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop", desc:"A metrics dashboard for tracking business performance with live-feeling charts and filters.", features:["Interactive chart components","Date-range filtering","Responsive dashboard grid"], tech:"React · Chart Components"},
  {title:"Python Automation Tool", tags:["Python","Automation","CLI"], img:"https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=1400&auto=format&fit=crop", desc:"A scripted tool that automates repetitive file and data tasks for a small business workflow.", features:["Batch file processing","Scheduled task automation","Readable CLI output"], tech:"Python"},
  {title:"C Student Management System", tags:["C","Systems","CLI"], img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop", desc:"A terminal-based records system for managing student data, built as a systems-programming exercise.", features:["File-based record storage","CRUD operations in C","Menu-driven terminal UI"], tech:"C"}
];

const education = [
  {title:"MATRICULATION", sub:"DPS & College, Gogera Campus · 2018 — 2019", desc:"DPS School empowers students with vital knowledge and skills, preparing students for future success through a comprehensive matriculation program."},
  {title:"FSC", sub:"Aspire Group Of Colleges · 2020 — 2021", desc:"Aspire College equips students with essential knowledge and skills, preparing students for future success through a dynamic academic program."},
  {title:"BS IN BBIT", sub:"Virtual University of Pakistan · 2022 — 2026", desc:"Virtual University equips students with essential knowledge and skills through a flexible modern learning environment focused on technology and business."}
];

const freelance = [
  {title:"GRAPHIC DESIGN", sub:"Where it started", desc:"Started with visual design and explored Photoshop, Illustrator, Canva, typography, color, layout and visual hierarchy."},
  {title:"DISCOVERING WEB DEVELOPMENT", sub:"Designing → Building", desc:"Moved from designing to building — started learning HTML, CSS and JavaScript."},
  {title:"BUILDING EXPERIENCES", sub:"First real projects", desc:"Started focusing on landing pages, business websites, portfolio websites and interactive interfaces."},
  {title:"WORDPRESS & WOOCOMMERCE", sub:"Going into commerce", desc:"Explored WordPress, themes, plugins, WooCommerce and ecommerce."},
  {title:"LEVELING UP", sub:"New languages", desc:"Expanded into React, Python and C."},
  {title:"THE FUTURE", sub:"What's next", desc:"Continuing to develop toward becoming a stronger software engineer."}
];

const packages = [
  {name:"STARTER", price:49, features:["Up to 3 Pages","Responsive Design","Modern UI","Contact Form","Basic SEO"]},
  {name:"PROFESSIONAL", price:99, featured:true, features:["Up to 7 Pages","Premium UI","Advanced Animations","Responsive Design","Basic SEO","WhatsApp Integration"]},
  {name:"BUSINESS", price:199, features:["Up to 15 Pages","Custom Design","WordPress","WooCommerce","SEO","Performance Optimization","Premium Support"]}
];

const socials = [
  {name:"INSTAGRAM", icon:"fa-brands fa-instagram", href:"https://instagram.com/"+portfolio.contact.instagram},
  {name:"TIKTOK", icon:"fa-brands fa-tiktok", href:"https://tiktok.com/@"+portfolio.contact.tiktok},
  {name:"FIVERR", icon:"fa-brands fa-fiverr", href:"https://fiverr.com/"+portfolio.contact.fiverr},
  {name:"WHATSAPP", icon:"fa-brands fa-whatsapp", href:"https://wa.me/"+portfolio.contact.whatsapp},
  {name:"EMAIL", icon:"fa-solid fa-envelope", href:"mailto:"+portfolio.contact.email}
];

/* ---------------------------- PYTHON LAB DATA ---------------------------- */
const pythonProjects = [
  {
    name:"Password Generator", file:"password_gen.py",
    code:`import random, string

def generate_password(length=12):
    chars = string.ascii_letters + string.digits + "!@#$%^&*"
    return "".join(random.choice(chars) for _ in range(length))

if __name__ == "__main__":
    print(generate_password(12))`,
    render(container){
      container.innerHTML = `<div class="result-label">BROWSER SIMULATION</div>
        <div class="sim-io">
          <label style="font-family:var(--mono);font-size:.72rem;">Length</label>
          <input type="number" id="pw-len" value="12" min="4" max="48">
          <button class="run-btn" id="pw-run">RUN</button>
        </div>
        <div class="sim-output" id="pw-out">// output will appear here</div>`;
      container.querySelector('#pw-run').onclick=()=>{
        const len=Math.max(4,Math.min(48,parseInt(container.querySelector('#pw-len').value)||12));
        const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let out=""; for(let i=0;i<len;i++) out+=chars[Math.floor(Math.random()*chars.length)];
        container.querySelector('#pw-out').textContent=out;
      };
    }
  },
  {
    name:"Calculator", file:"calculator.py",
    code:`def calculate(a, b, op):
    if op == "+": return a + b
    if op == "-": return a - b
    if op == "*": return a * b
    if op == "/": return a / b if b != 0 else "Error"
    return "Unknown operator"

print(calculate(12, 4, "+"))`,
    render(container){
      container.innerHTML = `<div class="result-label">BROWSER SIMULATION</div>
        <div class="sim-io">
          <input type="number" id="calc-a" placeholder="A" value="12">
          <select id="calc-op"><option>+</option><option>-</option><option>*</option><option>/</option></select>
          <input type="number" id="calc-b" placeholder="B" value="4">
          <button class="run-btn" id="calc-run">RUN</button>
        </div>
        <div class="sim-output" id="calc-out">// output will appear here</div>`;
      container.querySelector('#calc-run').onclick=()=>{
        const a=parseFloat(container.querySelector('#calc-a').value)||0;
        const b=parseFloat(container.querySelector('#calc-b').value)||0;
        const op=container.querySelector('#calc-op').value;
        let r; if(op==="+")r=a+b; else if(op==="-")r=a-b; else if(op==="*")r=a*b; else r=b!==0?a/b:"Error";
        container.querySelector('#calc-out').textContent=">>> "+r;
      };
    }
  },
  {
    name:"Number Guessing Game", file:"guess_game.py",
    code:`import random

def play():
    target = random.randint(1, 100)
    guess = None
    while guess != target:
        guess = int(input("Guess (1-100): "))
        if guess < target: print("Too low")
        elif guess > target: print("Too high")
    print("Correct!")`,
    render(container){
      let target=Math.floor(Math.random()*100)+1, tries=0;
      container.innerHTML = `<div class="result-label">BROWSER SIMULATION</div>
        <div class="sim-io">
          <input type="number" id="gg-val" placeholder="Guess 1-100">
          <button class="run-btn" id="gg-run">GUESS</button>
        </div>
        <div class="sim-output" id="gg-out">Guess a number between 1 and 100.</div>`;
      container.querySelector('#gg-run').onclick=()=>{
        const g=parseInt(container.querySelector('#gg-val').value); tries++;
        const out=container.querySelector('#gg-out');
        if(isNaN(g)){out.textContent="Enter a number.";return;}
        if(g<target) out.textContent="Too low. Tries: "+tries;
        else if(g>target) out.textContent="Too high. Tries: "+tries;
        else { out.textContent="Correct! It was "+target+" (tries: "+tries+")"; target=Math.floor(Math.random()*100)+1; tries=0; }
      };
    }
  },
  {
    name:"Expense Tracker", file:"expense_tracker.py",
    code:`expenses = []

def add_expense(label, amount):
    expenses.append({"label": label, "amount": amount})

def total():
    return sum(e["amount"] for e in expenses)`,
    render(container){
      let items=[];
      container.innerHTML = `<div class="result-label">BROWSER SIMULATION</div>
        <div class="sim-io">
          <input type="text" id="ex-label" placeholder="Label">
          <input type="number" id="ex-amt" placeholder="Amount">
          <button class="run-btn" id="ex-add">ADD EXPENSE</button>
        </div>
        <div class="sim-list" id="ex-list"></div>
        <div class="sim-output" id="ex-total">Total: $0</div>`;
      const redraw=()=>{
        container.querySelector('#ex-list').innerHTML=items.map(i=>`<div>${i.label} — $${i.amount.toFixed(2)}</div>`).join("")||"<div>No expenses yet.</div>";
        container.querySelector('#ex-total').textContent="Total: $"+items.reduce((s,i)=>s+i.amount,0).toFixed(2);
      };
      redraw();
      container.querySelector('#ex-add').onclick=()=>{
        const label=container.querySelector('#ex-label').value||"Item";
        const amt=parseFloat(container.querySelector('#ex-amt').value)||0;
        items.push({label,amount:amt}); redraw();
      };
    }
  },
  {
    name:"Student Management System", file:"students.py",
    code:`students = {}

def add_student(id, name, grade):
    students[id] = {"name": name, "grade": grade}

def list_students():
    for id, s in students.items():
        print(id, s["name"], s["grade"])`,
    render(container){
      let students={};
      container.innerHTML = `<div class="result-label">BROWSER SIMULATION</div>
        <div class="sim-io">
          <input type="text" id="st-id" placeholder="ID">
          <input type="text" id="st-name" placeholder="Name">
          <input type="text" id="st-grade" placeholder="Grade">
          <button class="run-btn" id="st-add">ADD STUDENT</button>
        </div>
        <div class="sim-list" id="st-list"></div>`;
      const redraw=()=>{
        const rows=Object.entries(students).map(([id,s])=>`<div>${id} — ${s.name} — ${s.grade}</div>`);
        container.querySelector('#st-list').innerHTML=rows.join("")||"<div>No students yet.</div>";
      };
      redraw();
      container.querySelector('#st-add').onclick=()=>{
        const id=container.querySelector('#st-id').value||Object.keys(students).length+1;
        const name=container.querySelector('#st-name').value||"Unnamed";
        const grade=container.querySelector('#st-grade').value||"-";
        students[id]={name,grade}; redraw();
      };
    }
  },
  {
    name:"Grade Calculator", file:"grade_calc.py",
    code:`def letter_grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

print(letter_grade(87))`,
    render(container){
      container.innerHTML = `<div class="result-label">BROWSER SIMULATION</div>
        <div class="sim-io">
          <input type="number" id="gr-score" placeholder="Score 0-100" value="87">
          <button class="run-btn" id="gr-run">CALCULATE</button>
        </div>
        <div class="sim-output" id="gr-out">// output will appear here</div>`;
      container.querySelector('#gr-run').onclick=()=>{
        const s=parseFloat(container.querySelector('#gr-score').value)||0;
        let g="F"; if(s>=90)g="A"; else if(s>=80)g="B"; else if(s>=70)g="C"; else if(s>=60)g="D";
        container.querySelector('#gr-out').textContent="Grade: "+g;
      };
    }
  }
];

/* ---------------------------- C LAB DATA ---------------------------- */
const cProjects = [
  {
    name:"Student Management System", file:"students.c",
    code:`struct Student {
    int id;
    char name[50];
    float grade;
};

int main() {
    struct Student s[100];
    int count = 0;
    // add / list / search students
    return 0;
}`,
    run(input){ return "> Student added.\n> Total students: "+(input||1); }
  },
  {
    name:"Bank Management System", file:"bank.c",
    code:`struct Account {
    int accNo;
    char owner[50];
    double balance;
};

void deposit(struct Account *a, double amt) {
    a->balance += amt;
}`,
    run(input){ return "> Deposit of $"+(input||0)+" processed.\n> New balance updated."; }
  },
  {
    name:"Calculator", file:"calculator.c",
    code:`float calculate(float a, float b, char op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b != 0 ? a / b : 0;
    }
    return 0;
}`,
    run(input){ return "> Result: "+(input||"0"); }
  },
  {
    name:"Grade Calculator", file:"grade.c",
    code:`char getGrade(int score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'F';
}`,
    run(input){ return "> Grade: "+(input||"C"); }
  },
  {
    name:"Number Guessing Game", file:"guess.c",
    code:`int target = rand() % 100 + 1;
int guess;
do {
    scanf("%d", &guess);
    if (guess < target) printf("Too low\\n");
    else if (guess > target) printf("Too high\\n");
} while (guess != target);`,
    run(input){ return "> Guess "+(input||"50")+" registered.\n> Keep guessing..."; }
  }
];

/* ---------------------------- REACT LAB DATA ---------------------------- */
const reactProjects = [
  {name:"React Todo App", code:`function TodoApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function addItem() {
    setItems([...items, text]);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      {items.map(i => <div key={i}>{i}</div>)}
    </div>
  );
}`,
    render(el){
      let items=[];
      el.innerHTML=`<div class="sim-io"><input id="rt-in" placeholder="New task"><button class="run-btn" id="rt-add">ADD</button></div><div class="sim-list" id="rt-list"></div>`;
      const redraw=()=>{el.querySelector('#rt-list').innerHTML=items.map((i,idx)=>`<div>${i} <button data-i="${idx}" style="float:right;color:var(--red)">✕</button></div>`).join("")||"<div>No tasks yet.</div>";
        el.querySelectorAll('#rt-list button').forEach(b=>b.onclick=()=>{items.splice(+b.dataset.i,1);redraw();});};
      redraw();
      el.querySelector('#rt-add').onclick=()=>{const v=el.querySelector('#rt-in').value.trim(); if(v){items.push(v); el.querySelector('#rt-in').value=""; redraw();}};
    }},
  {name:"React Counter", code:`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`,
    render(el){
      let c=0;
      el.innerHTML=`<div style="display:flex;align-items:center;gap:20px;font-family:var(--mono)"><button class="run-btn" id="c-dec">-</button><span id="c-val" style="font-size:1.6rem">0</span><button class="run-btn" id="c-inc">+</button></div>`;
      el.querySelector('#c-inc').onclick=()=>{c++;el.querySelector('#c-val').textContent=c;};
      el.querySelector('#c-dec').onclick=()=>{c--;el.querySelector('#c-val').textContent=c;};
    }},
  {name:"Notes Application", code:`function Notes() {
  const [notes, setNotes] = useState([]);
  const addNote = (text) => setNotes([...notes, text]);
  return <NotesList notes={notes} onAdd={addNote} />;
}`,
    render(el){
      let notes=[];
      el.innerHTML=`<div class="sim-io"><input id="nt-in" placeholder="Write a note"><button class="run-btn" id="nt-add">SAVE</button></div><div class="sim-list" id="nt-list"></div>`;
      const redraw=()=>{el.querySelector('#nt-list').innerHTML=notes.map(n=>`<div>${n}</div>`).join("")||"<div>No notes yet.</div>";};
      redraw();
      el.querySelector('#nt-add').onclick=()=>{const v=el.querySelector('#nt-in').value.trim(); if(v){notes.push(v);el.querySelector('#nt-in').value="";redraw();}};
    }},
  {name:"Shopping Cart", code:`function Cart({ products }) {
  const [cart, setCart] = useState([]);
  const add = (p) => setCart([...cart, p]);
  const total = cart.reduce((s, p) => s + p.price, 0);
  return <CartView items={cart} total={total} onAdd={add} />;
}`,
    render(el){
      const products=[{name:"Tee",price:20},{name:"Cap",price:15},{name:"Hoodie",price:45}];
      let cart=[];
      el.innerHTML=`<div class="sim-io">${products.map(p=>`<button class="run-btn" data-n="${p.name}" data-p="${p.price}">ADD ${p.name} $${p.price}</button>`).join(" ")}</div><div class="sim-list" id="sc-list"></div><div class="sim-output" id="sc-total">Total: $0</div>`;
      const redraw=()=>{el.querySelector('#sc-list').innerHTML=cart.map(c=>`<div>${c}</div>`).join("")||"<div>Cart is empty.</div>";
        el.querySelector('#sc-total').textContent="Total: $"+cart.reduce((s,c)=>{const p=products.find(x=>c.startsWith(x.name));return s+(p?p.price:0);},0);};
      redraw();
      el.querySelectorAll('button[data-n]').forEach(b=>b.onclick=()=>{cart.push(b.dataset.n+" — $"+b.dataset.p); redraw();});
    }},
  {name:"Weather Dashboard", code:`function Weather({ city }) {
  const [data, setData] = useState(null);
  useEffect(() => { fetchWeather(city).then(setData); }, [city]);
  return data ? <WeatherCard data={data} /> : <Loading />;
}`,
    render(el){
      const cities={"Islamabad":"29°C, Clear","Lahore":"33°C, Sunny","Karachi":"31°C, Humid"};
      el.innerHTML=`<div class="sim-io"><select id="wd-city">${Object.keys(cities).map(c=>`<option>${c}</option>`).join("")}</select><button class="run-btn" id="wd-go">GET WEATHER</button></div><div class="sim-output" id="wd-out">Select a city.</div>`;
      el.querySelector('#wd-go').onclick=()=>{const c=el.querySelector('#wd-city').value; el.querySelector('#wd-out').textContent=c+": "+cities[c];};
    }},
  {name:"Quiz Application", code:`function Quiz({ questions }) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const answer = (choice) => {
    if (choice === questions[i].correct) setScore(score + 1);
    setI(i + 1);
  };
  return <Question q={questions[i]} onAnswer={answer} />;
}`,
    render(el){
      const qs=[{q:"HTML stands for?",opts:["Hyper Trainer","HyperText Markup Language","High Text Machine"],a:1},{q:"CSS is used for?",opts:["Logic","Styling","Database"],a:1}];
      let i=0,score=0;
      const draw=()=>{
        if(i>=qs.length){el.innerHTML=`<div class="sim-output">Quiz complete. Score: ${score}/${qs.length}</div>`;return;}
        el.innerHTML=`<div class="sim-output">${qs[i].q}</div><div class="sim-io">${qs[i].opts.map((o,idx)=>`<button class="run-btn" data-idx="${idx}">${o}</button>`).join(" ")}</div>`;
        el.querySelectorAll('button[data-idx]').forEach(b=>b.onclick=()=>{if(+b.dataset.idx===qs[i].a)score++; i++; draw();});
      };
      draw();
    }},
  {name:"Expense Tracker", code:`function ExpenseTracker() {
  const [items, setItems] = useState([]);
  const total = items.reduce((s, i) => s + i.amount, 0);
  return <ExpenseView items={items} total={total} />;
}`,
    render(el){
      let items=[];
      el.innerHTML=`<div class="sim-io"><input id="ret-l" placeholder="Label"><input id="ret-a" type="number" placeholder="Amount"><button class="run-btn" id="ret-add">ADD</button></div><div class="sim-list" id="ret-list"></div><div class="sim-output" id="ret-total">Total: $0</div>`;
      const redraw=()=>{el.querySelector('#ret-list').innerHTML=items.map(i=>`<div>${i.l} — $${i.a}</div>`).join("")||"<div>No expenses.</div>";
        el.querySelector('#ret-total').textContent="Total: $"+items.reduce((s,i)=>s+i.a,0);};
      redraw();
      el.querySelector('#ret-add').onclick=()=>{const l=el.querySelector('#ret-l').value||"Item";const a=parseFloat(el.querySelector('#ret-a').value)||0;items.push({l,a});redraw();};
    }},
  {name:"Theme Switcher", code:`function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}`,
    render(el){
      el.innerHTML=`<div id="ts-box" style="padding:24px;background:#fff;color:#0A0A0A;transition:.3s;font-family:var(--mono)">Current theme: <b id="ts-label">Light</b><br><button class="run-btn" id="ts-toggle" style="margin-top:12px">TOGGLE THEME</button></div>`;
      let dark=false;
      el.querySelector('#ts-toggle').onclick=()=>{dark=!dark;
        el.querySelector('#ts-box').style.background=dark?"#0A0A0A":"#fff";
        el.querySelector('#ts-box').style.color=dark?"#F3F0E8":"#0A0A0A";
        el.querySelector('#ts-label').textContent=dark?"Dark":"Light";};
    }}
];

/* ---------------------------- PLAYGROUND DATA ---------------------------- */
const playgroundProjects = [
  {name:"Animated Button", html:`<button class="btn">Hover Me</button>`, css:`body{display:flex;align-items:center;justify-content:center;height:100vh;margin:0;font-family:sans-serif;background:#F3F0E8;}
.btn{padding:16px 32px;border:2px solid #0A0A0A;background:transparent;font-size:14px;letter-spacing:1px;cursor:pointer;transition:.3s;}
.btn:hover{background:#FF2B1F;color:#fff;border-color:#FF2B1F;transform:translateY(-3px);}`, js:``},
  {name:"Color Generator", html:`<div id="app"><div id="swatch"></div><button id="go">Generate</button><p id="code"></p></div>`, css:`body{font-family:sans-serif;text-align:center;padding-top:60px;background:#F3F0E8;}
#swatch{width:160px;height:160px;margin:0 auto 20px;border-radius:8px;background:#FF2B1F;}
button{padding:10px 20px;cursor:pointer;}`, js:`function rand(){return Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');}
document.getElementById('go').onclick=()=>{const c='#'+rand();document.getElementById('swatch').style.background=c;document.getElementById('code').textContent=c;};`},
  {name:"Counter", html:`<div id="app"><h1 id="n">0</h1><button id="minus">-</button><button id="plus">+</button></div>`, css:`body{font-family:sans-serif;text-align:center;padding-top:80px;background:#F3F0E8;}
button{font-size:20px;width:48px;height:48px;margin:0 8px;cursor:pointer;}`, js:`let n=0;const el=document.getElementById('n');
document.getElementById('plus').onclick=()=>{n++;el.textContent=n;};
document.getElementById('minus').onclick=()=>{n--;el.textContent=n;};`},
  {name:"Digital Clock", html:`<div id="clock">00:00:00</div>`, css:`body{background:#0A0A0A;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;}
#clock{color:#FF2B1F;font-family:monospace;font-size:48px;}`, js:`function tick(){document.getElementById('clock').textContent=new Date().toLocaleTimeString();}
setInterval(tick,1000);tick();`},
  {name:"Random Quote Generator", html:`<div id="app"><p id="quote">Click for a quote.</p><button id="go">New Quote</button></div>`, css:`body{font-family:sans-serif;max-width:500px;margin:60px auto;text-align:center;background:#F3F0E8;}
button{padding:10px 20px;cursor:pointer;}`, js:`const quotes=["Build. Ship. Repeat.","Design is how it works.","Code is craft.","Small steps, every day."];
document.getElementById('go').onclick=()=>{document.getElementById('quote').textContent=quotes[Math.floor(Math.random()*quotes.length)];};`},
  {name:"Password Generator", html:`<div id="app"><input id="out" readonly><button id="go">Generate</button></div>`, css:`body{font-family:sans-serif;text-align:center;padding-top:60px;background:#F3F0E8;}
input{font-size:16px;padding:8px;width:220px;text-align:center;}
button{padding:8px 16px;margin-left:8px;cursor:pointer;}`, js:`document.getElementById('go').onclick=()=>{const c='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$';let p='';for(let i=0;i<12;i++)p+=c[Math.floor(Math.random()*c.length)];document.getElementById('out').value=p;};`},
  {name:"Todo List", html:`<div id="app"><input id="in" placeholder="New task"><button id="add">Add</button><ul id="list"></ul></div>`, css:`body{font-family:sans-serif;max-width:400px;margin:60px auto;background:#F3F0E8;}
ul{list-style:none;padding:0;} li{padding:8px;border-bottom:1px solid #ccc;}`, js:`document.getElementById('add').onclick=()=>{const v=document.getElementById('in').value;if(!v)return;const li=document.createElement('li');li.textContent=v;document.getElementById('list').appendChild(li);document.getElementById('in').value='';};`},
  {name:"BMI Calculator", html:`<div id="app"><input id="w" placeholder="Weight kg"><input id="h" placeholder="Height cm"><button id="go">Calculate</button><p id="res"></p></div>`, css:`body{font-family:sans-serif;text-align:center;padding-top:60px;background:#F3F0E8;}
input{display:block;margin:10px auto;padding:8px;width:200px;}`, js:`document.getElementById('go').onclick=()=>{const w=+document.getElementById('w').value,h=+document.getElementById('h').value/100;const bmi=(w/(h*h)).toFixed(1);document.getElementById('res').textContent='BMI: '+bmi;};`},
  {name:"Tip Calculator", html:`<div id="app"><input id="bill" placeholder="Bill amount"><input id="pct" placeholder="Tip %" value="15"><button id="go">Calculate</button><p id="res"></p></div>`, css:`body{font-family:sans-serif;text-align:center;padding-top:60px;background:#F3F0E8;}
input{display:block;margin:10px auto;padding:8px;width:200px;}`, js:`document.getElementById('go').onclick=()=>{const b=+document.getElementById('bill').value,p=+document.getElementById('pct').value;const tip=(b*p/100).toFixed(2);document.getElementById('res').textContent='Tip: $'+tip+' | Total: $'+(b*1+ +tip).toFixed(2);};`},
  {name:"Theme Switcher", html:`<div id="app"><button id="toggle">Toggle Theme</button><p>Preview text</p></div>`, css:`body{font-family:sans-serif;text-align:center;padding-top:60px;background:#F3F0E8;color:#0A0A0A;transition:.3s;}
button{padding:10px 20px;cursor:pointer;}`, js:`let dark=false;document.getElementById('toggle').onclick=()=>{dark=!dark;document.body.style.background=dark?'#0A0A0A':'#F3F0E8';document.body.style.color=dark?'#F3F0E8':'#0A0A0A';};`}
];

/* ======================================================================
   UTILITIES
====================================================================== */
function el(tag, cls, html){ const e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e; }
function whatsappLink(msg){ return "https://wa.me/"+portfolio.contact.whatsapp+"?text="+encodeURIComponent(msg); }

/* ======================================================================
   LOADER
====================================================================== */
(function loader(){
  const word=document.getElementById('loader-word');
  const pct=document.getElementById('loader-pct');
  const line=document.getElementById('loader-line');
  const steps=["M","MO","MOI","MOIZ","MOIZ AHMAD"];
  let s=0;
  const wordTimer=setInterval(()=>{ word.textContent=steps[s]; s++; if(s>=steps.length) clearInterval(wordTimer); }, 220);
  let p=0;
  const pctTimer=setInterval(()=>{
    p+=Math.random()*18+8; if(p>100)p=100;
    pct.textContent=Math.floor(p)+"%";
    line.style.width=p+"%";
    if(p>=100){
      clearInterval(pctTimer);
      setTimeout(()=>{
        const wipe=document.getElementById('loader-wipe');
        wipe.style.transition="transform .55s var(--ease)";
        wipe.style.transform="scaleX(1)";
        setTimeout(()=>{
          document.getElementById('loader').style.display='none';
          wipe.style.transition="opacity .4s";
          wipe.style.opacity="0";
          setTimeout(()=>{ wipe.style.display='none'; document.body.classList.add('loaded'); revealOnScroll(); },400);
        },550);
      },200);
    }
  }, 160);
})();

/* ======================================================================
   CURSOR
====================================================================== */
(function cursor(){
  const isTouch = matchMedia('(hover:none)').matches;
  if(isTouch){ document.body.classList.add('touch'); return; }
  const dot=document.getElementById('cursor-dot');
  const ring=document.getElementById('cursor-ring');
  const label=document.getElementById('cursor-ring-label');
  let mx=0,my=0, rx=0, ry=0;
  window.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  function loop(){ rx+=(mx-rx)*0.18; ry+=(my-ry)*0.18; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); }
  loop();
  document.addEventListener('mousedown',()=>ring.classList.add('click'));
  document.addEventListener('mouseup',()=>ring.classList.remove('click'));
  function setState(cls,text){ ring.className=''; if(cls)ring.classList.add(cls); label.textContent=text||''; }
  document.addEventListener('mouseover',e=>{
    const t=e.target;
    if(t.closest('.project-visual')){ setState('big','VIEW'); }
    else if(t.closest('.code-pane,.term,.sim-io,.pg-editor')){ setState('big','RUN'); }
    else if(t.closest('.pkg-col')){ setState('big','SELECT'); }
    else if(t.closest('.social-row, footer a')){ setState('big','OPEN'); }
    else if(t.closest('a,button,input,select,textarea,.service-row,.cloud-item')){ setState('hover'); }
    else { setState('',''); }
  });
})();

/* ======================================================================
   SCROLL PROGRESS + NAV
====================================================================== */
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const pct=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById('scroll-progress').style.width=pct+'%';
  document.getElementById('site-nav').classList.toggle('scrolled', h.scrollTop>40);
});
document.getElementById('nav-toggle').addEventListener('click',()=>{
  document.getElementById('nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav-links').classList.remove('open')));

function revealOnScroll(){
  const items=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  },{threshold:.15});
  items.forEach(i=>io.observe(i));
}

/* ======================================================================
   WORK CLOUD
====================================================================== */
(function buildCloud(){
  const cloud=document.getElementById('work-cloud');
  const positions=[
    {top:'6%',left:'8%'},{top:'2%',left:'55%'},{top:'22%',left:'30%'},
    {top:'34%',left:'70%'},{top:'50%',left:'5%'},{top:'56%',left:'42%'},
    {top:'72%',left:'62%'},{top:'80%',left:'18%'}
  ];
  techCloud.forEach((t,i)=>{
    const item=el('div','cloud-item', `<i class="${t.icon}"></i> ${t.name}`);
    const pos=positions[i%positions.length];
    item.style.top=pos.top; item.style.left=pos.left;
    item.style.transitionDelay=(i*0.12)+'s';
    cloud.appendChild(item);
    requestAnimationFrame(()=>{
      item.style.transition='opacity .8s var(--ease), transform .8s var(--ease)';
      item.style.opacity='1';
    });
    const depth=(i%3)*10-10;
    let floatY=0, dir=1;
    setInterval(()=>{
      floatY += dir*0.4; if(Math.abs(floatY)>8) dir*=-1;
      item.style.transform=`translateZ(${depth}px) translateY(${floatY}px) rotateX(${floatY*0.4}deg) rotateY(${depth*0.3}deg)`;
    },60);
  });
  cloud.addEventListener('mousemove',(e)=>{
    const r=cloud.getBoundingClientRect();
    const cx=(e.clientX-r.left)/r.width-0.5;
    const cy=(e.clientY-r.top)/r.height-0.5;
    cloud.style.transform=`rotateY(${cx*6}deg) rotateX(${-cy*6}deg)`;
  });
  cloud.addEventListener('mouseleave',()=>{ cloud.style.transform='rotateY(0) rotateX(0)'; });
})();

/* ======================================================================
   ABOUT — stats + image
====================================================================== */
document.getElementById('about-img').src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop";
document.getElementById('about-img').alt="Abstract close-up of code on a screen";
document.getElementById('about-img').onerror=function(){ this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg,#151515,#050505)'; };

(function countStats(){
  const nums=document.querySelectorAll('.stat-num');
  const io=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const target=+en.target.dataset.target;
        let cur=0; const step=Math.max(1,Math.ceil(target/40));
        const t=setInterval(()=>{ cur+=step; if(cur>=target){cur=target;clearInterval(t);} en.target.textContent=cur; },30);
        io.unobserve(en.target);
      }
    });
  },{threshold:.5});
  nums.forEach(n=>io.observe(n));
})();

/* ======================================================================
   SERVICES RENDER
====================================================================== */
(function renderServices(){
  const list=document.getElementById('services-list');
  services.forEach((s,i)=>{
    const row=el('div','service-row reveal', `
      <div class="service-num">${String(i+1).padStart(2,'0')}</div>
      <div><div class="service-title">${s.title}</div><div class="service-desc">${s.desc}</div></div>
      <div class="service-desc" style="display:none"></div>
      <i class="fa-solid fa-arrow-up-right-from-square service-arrow"></i>
    `);
    list.appendChild(row);
  });
})();

/* ======================================================================
   PROJECTS RENDER + MODAL
====================================================================== */
(function renderProjects(){
  const list=document.getElementById('projects-list');
  projects.forEach((p,i)=>{
    const block=el('div','project-block reveal', `
      <div>
        <div class="project-meta">${String(i+1).padStart(2,'0')} / SELECTED WORK</div>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="project-line"><i style="width:${(i+1)*16}%"></i></div>
      </div>
      <div class="project-visual" data-idx="${i}">
        <img src="${p.img}" alt="${p.title} preview" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg,#D9D5CD,#F3F0E8)'; this.remove();">
      </div>
    `);
    list.appendChild(block);
  });
  list.addEventListener('click',e=>{
    const v=e.target.closest('.project-visual');
    if(!v)return;
    const p=projects[+v.dataset.idx];
    openProjectModal(p);
  });
})();

function openProjectModal(p){
  document.getElementById('modal-img').src=p.img;
  document.getElementById('modal-img').alt=p.title;
  document.getElementById('modal-title').textContent=p.title;
  document.getElementById('modal-tech').textContent=p.tech;
  document.getElementById('modal-desc').textContent=p.desc;
  document.getElementById('modal-feat').innerHTML=p.features.map(f=>`<li><i class="fa-solid fa-check"></i>${f}</li>`).join('');
  document.getElementById('modal-demo').href=whatsappLink("Hello Moiz Ahmad!\n\nI would like to see more about: "+p.title);
  document.getElementById('project-modal').classList.add('open');
}
document.getElementById('modal-close').onclick=()=>document.getElementById('project-modal').classList.remove('open');
document.getElementById('project-modal').addEventListener('click',e=>{ if(e.target.id==='project-modal') e.target.classList.remove('open'); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ document.getElementById('project-modal').classList.remove('open'); closeCart(); } });

/* ======================================================================
   CODE LAB — PYTHON + C
====================================================================== */
function highlightCode(code){
  return code.split('\n').map((l,i)=>`<span class="ln">${i+1}</span>${l.replace(/&/g,'&amp;').replace(/</g,'&lt;')}`).join('\n');
}

(function renderPythonLab(){
  const wrap=document.getElementById('python-lab');
  wrap.style.gridTemplateColumns='1fr';
  const pillRow=el('div','lab-list');
  pythonProjects.forEach((p,i)=>{
    const pill=el('button','lab-pill'+(i===0?' active':''), p.name);
    pill.onclick=()=>{ pillRow.querySelectorAll('.lab-pill').forEach(x=>x.classList.remove('active')); pill.classList.add('active'); showPy(i); };
    pillRow.appendChild(pill);
  });
  wrap.appendChild(pillRow);
  const shell=el('div','code-shell');
  wrap.appendChild(shell);
  function showPy(i){
    const p=pythonProjects[i];
    shell.innerHTML=`
      <div class="code-pane">
        <div class="code-topbar"><span class="code-fname">${p.file}</span>
          <div class="code-actions"><button id="py-copy">COPY</button></div>
        </div>
        <pre class="code-pre">${highlightCode(p.code)}</pre>
      </div>
      <div class="result-pane" id="py-result"></div>`;
    p.render(shell.querySelector('#py-result'));
    shell.querySelector('#py-copy').onclick=()=>navigator.clipboard.writeText(p.code);
  }
  showPy(0);
})();

(function renderCLab(){
  const wrap=document.getElementById('c-lab');
  wrap.style.gridTemplateColumns='1fr';
  const pillRow=el('div','lab-list');
  cProjects.forEach((p,i)=>{
    const pill=el('button','lab-pill'+(i===0?' active':''), p.name);
    pill.onclick=()=>{ pillRow.querySelectorAll('.lab-pill').forEach(x=>x.classList.remove('active')); pill.classList.add('active'); showC(i); };
    pillRow.appendChild(pill);
  });
  wrap.appendChild(pillRow);
  const shell=el('div','code-shell');
  wrap.appendChild(shell);
  function showC(i){
    const p=cProjects[i];
    shell.innerHTML=`
      <div class="code-pane">
        <div class="code-topbar"><span class="code-fname">${p.file}</span>
          <div class="code-actions"><button id="c-copy">COPY</button></div>
        </div>
        <pre class="code-pre">${highlightCode(p.code)}</pre>
      </div>
      <div class="result-pane">
        <div class="result-label">LIVE TERMINAL SIMULATION</div>
        <div class="sim-io"><input id="c-input" placeholder="Enter value / input"><button class="run-btn" id="c-run">RUN</button></div>
        <div class="term" id="c-term"><span class="prompt">$</span> ./${p.file.replace('.c','')}<br><span class="cursor-blink"></span></div>
      </div>`;
    shell.querySelector('#c-copy').onclick=()=>navigator.clipboard.writeText(p.code);
    shell.querySelector('#c-run').onclick=()=>{
      const val=shell.querySelector('#c-input').value;
      const term=shell.querySelector('#c-term');
      term.innerHTML=`<span class="prompt">$</span> ./${p.file.replace('.c','')}<br>${p.run(val).replace(/\n/g,'<br>')}<br><span class="cursor-blink"></span>`;
    };
  }
  showC(0);
})();

document.querySelectorAll('.lab-tab[data-lab]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.lab-tab[data-lab]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const target=btn.dataset.lab;
    document.getElementById('python-lab').style.display= target==='python' ? 'grid':'none';
    document.getElementById('c-lab').style.display= target==='c' ? 'grid':'none';
  });
});

/* ======================================================================
   REACT LAB RENDER
====================================================================== */
(function renderReactLab(){
  const selectWrap=document.getElementById('react-select');
  const showcase=document.getElementById('react-showcase');
  reactProjects.forEach((p,i)=>{
    const pill=el('button','lab-pill'+(i===0?' active':''), p.name);
    pill.style.borderColor='rgba(243,240,232,.25)';
    pill.style.color= i===0 ? '#fff':'#a39f95';
    pill.onclick=()=>{
      selectWrap.querySelectorAll('.lab-pill').forEach(x=>{x.classList.remove('active');x.style.color='#a39f95';});
      pill.classList.add('active'); pill.style.color='#fff';
      showReact(i);
    };
    selectWrap.appendChild(pill);
  });
  function showReact(i){
    const p=reactProjects[i];
    showcase.innerHTML=`
      <div class="code-shell" style="margin-top:10px;background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.1)">
        <div class="code-pane">
          <div class="code-topbar" style="border-color:rgba(255,255,255,.1)"><span class="code-fname">${p.name}.jsx</span><div class="code-actions"><button id="rx-copy">COPY</button></div></div>
          <pre class="code-pre">${highlightCode(p.code)}</pre>
        </div>
        <div class="result-pane" style="background:#151515;color:#eae7df">
          <div class="result-label">INTERACTIVE REACT-STYLE DEMO</div>
          <div id="rx-demo"></div>
        </div>
      </div>`;
    p.render(showcase.querySelector('#rx-demo'));
    showcase.querySelector('#rx-copy').onclick=()=>navigator.clipboard.writeText(p.code);
  }
  showReact(0);
})();

/* ======================================================================
   PLAYGROUND RENDER
====================================================================== */
(function renderPlayground(){
  const selectList=document.getElementById('pg-select');
  let current=0, currentTab='html';
  playgroundProjects.forEach((p,i)=>{
    const li=el('li', i===0?'active':'', `${String(i+1).padStart(2,'0')} ${p.name}`);
    li.onclick=()=>{ current=i; selectList.querySelectorAll('li').forEach(x=>x.classList.remove('active')); li.classList.add('active');
      document.getElementById('pg-preview-title').textContent=p.name.toUpperCase();
      loadTab(currentTab); runPreview(); };
    selectList.appendChild(li);
  });
  const textarea=document.getElementById('pg-textarea');
  function loadTab(tab){ currentTab=tab; textarea.value=playgroundProjects[current][tab]; }
  document.querySelectorAll('.pg-tabs button').forEach(btn=>{
    btn.onclick=()=>{ document.querySelectorAll('.pg-tabs button').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
      playgroundProjects[current][currentTab]=textarea.value; loadTab(btn.dataset.tab); };
  });
  function runPreview(){
    const p=playgroundProjects[current];
    p[currentTab]=textarea.value;
    const doc=`<!DOCTYPE html><html><head><style>${p.css}</style></head><body>${p.html}<script>${p.js}<\/script></body></html>`;
    document.getElementById('pg-frame').srcdoc=doc;
  }
  document.getElementById('pg-run').onclick=runPreview;
  document.getElementById('pg-reset').onclick=()=>{ loadTab(currentTab); runPreview(); };
  document.getElementById('pg-copy').onclick=()=>navigator.clipboard.writeText(textarea.value);
  document.getElementById('pg-full').onclick=()=>{ const f=document.getElementById('pg-frame'); if(f.requestFullscreen) f.requestFullscreen(); };
  document.getElementById('pg-preview-title').textContent=playgroundProjects[0].name.toUpperCase();
  loadTab('html'); runPreview();
})();

/* ======================================================================
   JOURNEY RENDER
====================================================================== */
(function renderJourney(){
  const edu=document.getElementById('education-list');
  education.forEach((e,i)=>{
    edu.appendChild(el('div','timeline-item reveal', `
      <div class="timeline-num">${String(i+1).padStart(2,'0')}</div>
      <div><div class="timeline-title">${e.title}</div><div class="timeline-sub">${e.sub}</div><div class="timeline-desc">${e.desc}</div></div>
    `));
  });
  const free=document.getElementById('freelance-list');
  freelance.forEach((f,i)=>{
    free.appendChild(el('div','timeline-item reveal', `
      <div class="timeline-num">${String(i+1).padStart(2,'0')}</div>
      <div><div class="timeline-title">${f.title}</div><div class="timeline-sub">${f.sub}</div><div class="timeline-desc">${f.desc}</div></div>
    `));
  });
  document.getElementById('journey-final').textContent="EVERY PROJECT IS ANOTHER STEP FORWARD.";
})();
document.querySelectorAll('.lab-tab[data-journey]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.lab-tab[data-journey]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const t=btn.dataset.journey;
    document.getElementById('education-list').style.display= t==='education'?'block':'none';
    document.getElementById('freelance-list').style.display= t==='freelance'?'block':'none';
  });
});

/* ======================================================================
   PACKAGES + CART
====================================================================== */
let cart=JSON.parse(localStorage.getItem('moiz_cart')||'[]');

(function renderPackages(){
  const wrap=document.getElementById('pkg-columns');
  packages.forEach((p,i)=>{
    const col=el('div','pkg-col reveal'+(p.featured?' featured':''), `
      ${p.featured?'<div class="pkg-badge">MOST POPULAR</div>':''}
      <div class="pkg-num">${String(i+1).padStart(2,'0')}</div>
      <div class="pkg-name">${p.name}</div>
      <div class="pkg-price">$${p.price}</div>
      <ul class="pkg-feat">${p.features.map(f=>`<li><i class="fa-solid fa-check"></i>${f}</li>`).join('')}</ul>
      <div class="pkg-cta">
        <button class="pkg-select-btn" data-pkg="${i}">ADD TO CART</button>
        <div class="pkg-underline"></div>
      </div>
    `);
    wrap.appendChild(col);
  });
  wrap.addEventListener('click',e=>{
    const btn=e.target.closest('.pkg-select-btn'); if(!btn)return;
    const p=packages[+btn.dataset.pkg];
    cart.push({name:p.name, price:p.price});
    saveCart(); renderCart(); openCart();
  });
})();

function saveCart(){ localStorage.setItem('moiz_cart', JSON.stringify(cart)); }
function renderCart(){
  const itemsWrap=document.getElementById('cart-items');
  document.getElementById('cart-count').textContent=cart.length;
  if(cart.length===0){ itemsWrap.innerHTML='<div class="cart-empty">Your cart is empty.</div>'; }
  else {
    itemsWrap.innerHTML=cart.map((c,i)=>`
      <div class="cart-item">
        <div><div class="ci-name">${c.name}</div><div class="ci-price">$${c.price}</div></div>
        <button data-i="${i}"><i class="fa-solid fa-xmark"></i></button>
      </div>`).join('');
    itemsWrap.querySelectorAll('button').forEach(b=>b.onclick=()=>{ cart.splice(+b.dataset.i,1); saveCart(); renderCart(); });
  }
  const total=cart.reduce((s,c)=>s+c.price,0);
  document.getElementById('cart-total').textContent='$'+total;
  const msg = cart.length ? "Hello Moiz Ahmad!\n\nI would like to discuss:\n"+cart.map(c=>c.name+" — $"+c.price).join("\n")+"\n\nTotal: $"+total+"\n\nPlease contact me for the next steps."
    : "Hello Moiz Ahmad! I'd like to discuss a project.";
  document.getElementById('cart-checkout').href=whatsappLink(msg);
}
function openCart(){ document.getElementById('cart-drawer').classList.add('open'); document.getElementById('cart-scrim').classList.add('open'); }
function closeCart(){ document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('cart-scrim').classList.remove('open'); }
document.getElementById('cart-btn').onclick=()=>{ openCart(); };
document.getElementById('cart-close').onclick=closeCart;
document.getElementById('cart-scrim').onclick=closeCart;
renderCart();

/* ======================================================================
   CONTACT — socials + form
====================================================================== */
(function renderSocials(){
  const wrap=document.getElementById('social-rows');
  socials.forEach(s=>{
    const row=el('a','social-row', `<span class="sweep"></span><span class="sr-content"><span><i class="${s.icon}"></i> ${s.name}</span><i class="fa-solid fa-arrow-up-right-from-square arrow"></i></span>`);
    row.href=s.href; row.target="_blank"; row.rel="noopener";
    wrap.appendChild(row);
  });
})();

document.getElementById('contact-form').addEventListener('submit', e=>{
  e.preventDefault();
  const name=document.getElementById('cf-name').value;
  const email=document.getElementById('cf-email').value;
  const type=document.getElementById('cf-type').value;
  const desc=document.getElementById('cf-desc').value;
  const msg=`Hello Moiz Ahmad!\n\nName: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nDescription:\n${desc}`;
  window.open(whatsappLink(msg), '_blank');
});

/* ======================================================================
   FOOTER
====================================================================== */
document.getElementById('footer-tech').innerHTML = techCloud.map(t=>`<span>${t.name}</span>`).join('');
document.getElementById('footer-social').innerHTML = socials.map(s=>`<a href="${s.href}" target="_blank" rel="noopener"><i class="${s.icon}"></i></a>`).join('');
document.getElementById('year').textContent = new Date().getFullYear();

/* Kick off reveal-on-scroll observers for elements added after initial load */
setTimeout(revealOnScroll, 50);