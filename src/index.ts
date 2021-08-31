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

const s = document.getElementById('status');

type PoWConfig = {
  string: string;
  difficulty_factor: number;
  salt: string;
};

export type Work = {
  result: string;
  nonce: number;
  string: string;
  key: string;
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

const addResult = (difficulty: any, time: any) => {
  const element = document.createElement('p');
  const text = document.createTextNode(
    `difficulty: ${difficulty} time: ${time}`,
  );
  element.appendChild(text);
  document.body.appendChild(element);

  res.push({difficulty, time});
};

for (let i = 1; i < 10; i++) {
  let difficulty_factor = i * FACTOR;
  config.difficulty_factor = difficulty_factor;

  const t0 = performance.now();
  gen_pow(config.salt, config.string, config.difficulty_factor);
  const t1 = performance.now();
  const time = t1 - t0;

  addResult(difficulty_factor, time);
}

const INFO = {
  threads: window.navigator.hardwareConcurrency,
  oscup: window.navigator.userAgent,
};

console.log(res);
console.log(INFO);

addResult(INFO.oscup, INFO.threads);

s.innerHTML = 'Benchmark finished';
