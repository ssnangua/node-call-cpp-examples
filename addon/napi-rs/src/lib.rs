#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn add(a: f64, b: f64) -> f64 {
  a + b
}
