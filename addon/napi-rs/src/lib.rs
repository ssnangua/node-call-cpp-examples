#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn add(left: f64, right: f64) -> f64 {
  left + right
}
