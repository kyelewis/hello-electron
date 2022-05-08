{ pkgs ? import <nixpkgs> {} }:
with pkgs;
mkShell {
  nativeBuildInputs = [ nodejs-17_x nodePackages.pnpm  electron ];
}
