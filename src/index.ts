/*
 * mCaptcha is a PoW based DoS protection software.
 * This is the frontend web component of the mCaptcha system
 * Copyright © 2021 Aravinth Manivnanan <realaravinth@batsense.net>.
 *
 * Use of this source code is governed by Apache 2.0 or MIT license.
 * You shoud have received a copy of MIT and Apache 2.0 along with
 * this program. If not, see <https://spdx.org/licenses/MIT.html> for
 * MIT or <http://www.apache.org/licenses/LICENSE-2.0> for Apache.
 */
import {gen_pow} from 'mcaptcha-browser';

type PoWConfig = {
  string: string;
  difficulty_factor: number;
  salt: string;
};

const FACTOR = 500000;
const SALT = '674243647f1c355da8607a8cdda05120d79ca5d1af8b3b49359d056a0a82';
const PHRASE = '6e2a53dbc7d307970d7ba3c0000221722cb74f1c325137251ce8fa5c2240';

const config: PoWConfig = {
  string: PHRASE,
  difficulty_factor: 1,
  salt: SALT,
};

type Perf = {
  difficulty: Number;
  time: Number;
};

const res: Array<Perf> = [];

const stats = document.getElementById('stats');

const addResult = (difficulty: Number, time: Number) => {
  const row = document.createElement('tr');
  row.className = 'data';
  const diff = document.createElement('td');
  diff.innerHTML = difficulty.toString();
  const duration = document.createElement('td');
  duration.innerHTML = time.toString();

  row.appendChild(diff);
  row.appendChild(duration);

  stats.appendChild(row);

  res.push({difficulty, time});
};

const addDeviceInfo = () => {
  const INFO = {
    threads: window.navigator.hardwareConcurrency,
    oscup: window.navigator.userAgent,
  };

  console.log(res);
  console.log(INFO);

  const element = document.createElement('div');
  const ua = document.createElement('b');
  ua.innerText = 'User Agent: ';
  const os = document.createTextNode(`${INFO.oscup}`);

  const threads = document.createElement('b');
  threads.innerText = 'Hardware concurrency: ';
  const threadsText = document.createTextNode(`${INFO.threads}`);

  element.appendChild(ua);
  element.appendChild(os);
  element.appendChild(document.createElement('br'));
  element.appendChild(threads);
  element.appendChild(threadsText);

  document.getElementById('device-info').appendChild(element);
};

document.getElementById('start').addEventListener('click', e => run(e));

const run = (e: Event) => {
  e.preventDefault();
  document.getElementById('pre-bench').style.display = 'none';
  document.getElementById('bench').style.display = 'flex';

  for (let i = 1; i < 10; i++) {
    let difficulty_factor = i * FACTOR;
    config.difficulty_factor = difficulty_factor;

    const t0 = performance.now();
    gen_pow(config.salt, config.string, config.difficulty_factor);
    const t1 = performance.now();
    const time = t1 - t0;

    addResult(difficulty_factor, time);
  }

  addDeviceInfo();

  const s = document.getElementById('status');
  s.innerHTML = 'Benchmark finished';
};
