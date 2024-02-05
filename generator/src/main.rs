extern crate tera;

use std::io::prelude::*;

use std::fs::File;
use tera::{Context, Tera};

fn main() {
    let mut outfile = File::create("../index.html").unwrap();
    let mut buffer = Vec::new();
    let context = Context::new();
    // Use globbing
    let tera = match Tera::new("templates/**/*") {
        Ok(t) => t,
        Err(e) => {
            println!("Parsing error(s): {}", e);
            ::std::process::exit(1);
        }
    };
    tera.render_to("base.html", &context, &mut buffer).unwrap();
    outfile.write_all(&buffer).unwrap();
}
