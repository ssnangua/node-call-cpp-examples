use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    let left: f64 = args[1].parse().unwrap();
    let right: f64 = args[2].parse().unwrap();
    println!("{}", left + right);
}
